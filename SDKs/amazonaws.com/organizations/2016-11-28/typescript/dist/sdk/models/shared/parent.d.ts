import { SpeakeasyBase } from "../../../internal/utils";
import { ParentTypeEnum } from "./parenttypeenum";
/**
 * Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
**/
export declare class Parent extends SpeakeasyBase {
    id?: string;
    type?: ParentTypeEnum;
}
