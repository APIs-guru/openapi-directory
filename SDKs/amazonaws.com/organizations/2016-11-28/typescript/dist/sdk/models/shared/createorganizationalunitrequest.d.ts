import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateOrganizationalUnitRequest extends SpeakeasyBase {
    name: string;
    parentId: string;
    tags?: Tag[];
}
