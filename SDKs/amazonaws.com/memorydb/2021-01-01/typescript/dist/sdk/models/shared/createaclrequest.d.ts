import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateAclRequest extends SpeakeasyBase {
    aclName: string;
    tags?: Tag[];
    userNames?: string[];
}
