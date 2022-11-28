import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentVersion } from "./agentversion";
import { DeviceStats } from "./devicestats";
import { EdgeModelStat } from "./edgemodelstat";
import { EdgeOutputConfig } from "./edgeoutputconfig";



export class GetDeviceFleetReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentVersions", elemType: AgentVersion })
  agentVersions?: AgentVersion[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceStats" })
  deviceStats?: DeviceStats;

  @SpeakeasyMetadata({ data: "json, name=ModelStats", elemType: EdgeModelStat })
  modelStats?: EdgeModelStat[];

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig?: EdgeOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ReportGenerated" })
  reportGenerated?: Date;
}
