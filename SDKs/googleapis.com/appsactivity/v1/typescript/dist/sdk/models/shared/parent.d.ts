import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
**/
export declare class Parent extends SpeakeasyBase {
    id?: string;
    isRoot?: boolean;
    title?: string;
}
