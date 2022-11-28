import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectEntityGlobalAccessEnum {
    None = "none",
    AnyoneWithRead = "anyone_with_read",
    AnyoneWithFull = "anyone_with_full"
}
/**
 * List Projects
**/
export declare class ProjectEntity extends SpeakeasyBase {
    globalAccess?: ProjectEntityGlobalAccessEnum;
    id?: number;
}
