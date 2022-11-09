import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentVersion } from "./agentversion";
import { DeviceStats } from "./devicestats";
import { EdgeModelStat } from "./edgemodelstat";
import { EdgeOutputConfig } from "./edgeoutputconfig";


export class GetDeviceFleetReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentVersions", elemType: shared.AgentVersion })
  agentVersions?: AgentVersion[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=DeviceStats" })
  deviceStats?: DeviceStats;

  @Metadata({ data: "json, name=ModelStats", elemType: shared.EdgeModelStat })
  modelStats?: EdgeModelStat[];

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig?: EdgeOutputConfig;

  @Metadata({ data: "json, name=ReportGenerated" })
  reportGenerated?: Date;
}
