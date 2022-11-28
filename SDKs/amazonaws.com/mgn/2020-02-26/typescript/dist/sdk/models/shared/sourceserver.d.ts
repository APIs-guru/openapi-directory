import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInfo } from "./datareplicationinfo";
import { LaunchedInstance } from "./launchedinstance";
import { LifeCycle } from "./lifecycle";
import { SourceProperties } from "./sourceproperties";
export declare class SourceServer extends SpeakeasyBase {
    arn?: string;
    dataReplicationInfo?: DataReplicationInfo;
    isArchived?: boolean;
    launchedInstance?: LaunchedInstance;
    lifeCycle?: LifeCycle;
    sourceProperties?: SourceProperties;
    sourceServerId?: string;
    tags?: Map<string, string>;
}
