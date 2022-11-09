import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeModelStat
/** 
 * Status of edge devices with this model.
**/
export class EdgeModelStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDeviceCount" })
  activeDeviceCount: number;

  @Metadata({ data: "json, name=ConnectedDeviceCount" })
  connectedDeviceCount: number;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @Metadata({ data: "json, name=OfflineDeviceCount" })
  offlineDeviceCount: number;

  @Metadata({ data: "json, name=SamplingDeviceCount" })
  samplingDeviceCount: number;
}
