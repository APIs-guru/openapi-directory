import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppLinkedAppInfo
/** 
 * Information from the app store if the app is linked to an app store.
**/
export class AppLinkedAppInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStoreId" })
  appStoreId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
