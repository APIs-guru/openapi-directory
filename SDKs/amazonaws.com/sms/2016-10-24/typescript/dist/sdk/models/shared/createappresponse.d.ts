import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppSummary } from "./appsummary";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";
export declare class CreateAppResponse extends SpeakeasyBase {
    appSummary?: AppSummary;
    serverGroups?: ServerGroup[];
    tags?: Tag[];
}
