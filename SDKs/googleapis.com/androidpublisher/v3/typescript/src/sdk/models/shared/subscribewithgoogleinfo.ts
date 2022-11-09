import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscribeWithGoogleInfo
/** 
 * Information associated with purchases made with 'Subscribe with Google'.
**/
export class SubscribeWithGoogleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=profileName" })
  profileName?: string;
}
