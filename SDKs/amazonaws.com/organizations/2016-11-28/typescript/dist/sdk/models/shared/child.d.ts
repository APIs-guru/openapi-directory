import { SpeakeasyBase } from "../../../internal/utils";
import { ChildTypeEnum } from "./childtypeenum";
/**
 * Contains a list of child entities, either OUs or accounts.
**/
export declare class Child extends SpeakeasyBase {
    id?: string;
    type?: ChildTypeEnum;
}
