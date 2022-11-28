import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountTreeRequest
/** 
 * JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
**/
export class AccountTreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileName" })
  profileName?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=webpropertyName" })
  webpropertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
