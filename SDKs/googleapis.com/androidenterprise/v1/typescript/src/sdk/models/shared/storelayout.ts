import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StoreLayoutStoreLayoutTypeEnum {
    Unknown = "unknown",
    Basic = "basic",
    Custom = "custom"
}


// StoreLayout
/** 
 * General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
**/
export class StoreLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homepageId" })
  homepageId?: string;

  @SpeakeasyMetadata({ data: "json, name=storeLayoutType" })
  storeLayoutType?: StoreLayoutStoreLayoutTypeEnum;
}
