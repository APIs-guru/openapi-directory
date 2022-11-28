import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateSubnetGroupRequest extends SpeakeasyBase {
    description?: string;
    subnetGroupName: string;
    subnetIds: string[];
    tags?: Tag[];
}
