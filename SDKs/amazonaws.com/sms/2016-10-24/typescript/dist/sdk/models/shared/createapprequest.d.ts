import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";
export declare class CreateAppRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name?: string;
    roleName?: string;
    serverGroups?: ServerGroup[];
    tags?: Tag[];
}
