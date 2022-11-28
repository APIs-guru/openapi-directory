import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscribeWithGoogleInfo
/** 
 * Information associated with purchases made with 'Subscribe with Google'.
**/
export class SubscribeWithGoogleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileName" })
  profileName?: string;
}
