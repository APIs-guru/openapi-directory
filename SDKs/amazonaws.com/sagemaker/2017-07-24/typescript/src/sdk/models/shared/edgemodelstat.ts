import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeModelStat
/** 
 * Status of edge devices with this model.
**/
export class EdgeModelStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDeviceCount" })
  activeDeviceCount: number;

  @SpeakeasyMetadata({ data: "json, name=ConnectedDeviceCount" })
  connectedDeviceCount: number;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @SpeakeasyMetadata({ data: "json, name=OfflineDeviceCount" })
  offlineDeviceCount: number;

  @SpeakeasyMetadata({ data: "json, name=SamplingDeviceCount" })
  samplingDeviceCount: number;
}
