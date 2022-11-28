import { SpeakeasyBase } from "../../../internal/utils";
import { AgentVersion } from "./agentversion";
import { DeviceStats } from "./devicestats";
import { EdgeModelStat } from "./edgemodelstat";
import { EdgeOutputConfig } from "./edgeoutputconfig";
export declare class GetDeviceFleetReportResponse extends SpeakeasyBase {
    agentVersions?: AgentVersion[];
    description?: string;
    deviceFleetArn: string;
    deviceFleetName: string;
    deviceStats?: DeviceStats;
    modelStats?: EdgeModelStat[];
    outputConfig?: EdgeOutputConfig;
    reportGenerated?: Date;
}
