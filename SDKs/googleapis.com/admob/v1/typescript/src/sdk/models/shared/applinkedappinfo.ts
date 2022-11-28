import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppLinkedAppInfo
/** 
 * Information from the app store if the app is linked to an app store.
**/
export class AppLinkedAppInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStoreId" })
  appStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
