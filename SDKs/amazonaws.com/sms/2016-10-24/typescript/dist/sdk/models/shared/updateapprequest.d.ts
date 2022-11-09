import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";
export declare class UpdateAppRequest extends SpeakeasyBase {
    appId?: string;
    description?: string;
    name?: string;
    roleName?: string;
    serverGroups?: ServerGroup[];
    tags?: Tag[];
}
