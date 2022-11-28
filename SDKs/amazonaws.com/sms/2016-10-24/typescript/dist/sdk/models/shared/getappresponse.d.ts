import { SpeakeasyBase } from "../../../internal/utils";
import { AppSummary } from "./appsummary";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";
export declare class GetAppResponse extends SpeakeasyBase {
    appSummary?: AppSummary;
    serverGroups?: ServerGroup[];
    tags?: Tag[];
}
