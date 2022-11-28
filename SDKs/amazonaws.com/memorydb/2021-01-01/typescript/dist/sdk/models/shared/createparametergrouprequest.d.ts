import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateParameterGroupRequest extends SpeakeasyBase {
    description?: string;
    family: string;
    parameterGroupName: string;
    tags?: Tag[];
}
