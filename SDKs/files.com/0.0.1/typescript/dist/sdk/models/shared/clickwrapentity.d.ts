import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClickwrapEntityUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum ClickwrapEntityUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum ClickwrapEntityUseWithUsersEnum {
    None = "none",
    Require = "require"
}
/**
 * Create Clickwrap
**/
export declare class ClickwrapEntity extends SpeakeasyBase {
    body?: string;
    id?: number;
    name?: string;
    useWithBundles?: ClickwrapEntityUseWithBundlesEnum;
    useWithInboxes?: ClickwrapEntityUseWithInboxesEnum;
    useWithUsers?: ClickwrapEntityUseWithUsersEnum;
}
