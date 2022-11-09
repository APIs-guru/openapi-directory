import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Config } from "./config";
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Failed = "FAILED"
}
/**
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
**/
export declare class Instance extends SpeakeasyBase {
    config?: Config;
    createTime?: string;
    name?: string;
    state?: InstanceStateEnum;
    stateMessage?: string;
    updateTime?: string;
}
