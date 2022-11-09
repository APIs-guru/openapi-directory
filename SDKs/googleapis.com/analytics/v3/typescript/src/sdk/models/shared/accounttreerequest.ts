import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountTreeRequest
/** 
 * JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
**/
export class AccountTreeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileName" })
  profileName?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=webpropertyName" })
  webpropertyName?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
