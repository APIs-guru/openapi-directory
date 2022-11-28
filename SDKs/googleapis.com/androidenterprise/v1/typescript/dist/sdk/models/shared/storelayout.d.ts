import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StoreLayoutStoreLayoutTypeEnum {
    Unknown = "unknown",
    Basic = "basic",
    Custom = "custom"
}
/**
 * General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
**/
export declare class StoreLayout extends SpeakeasyBase {
    homepageId?: string;
    storeLayoutType?: StoreLayoutStoreLayoutTypeEnum;
}
