import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppRestrictionsSchemaChangeEvent
/** 
 * An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
**/
export class AppRestrictionsSchemaChangeEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
