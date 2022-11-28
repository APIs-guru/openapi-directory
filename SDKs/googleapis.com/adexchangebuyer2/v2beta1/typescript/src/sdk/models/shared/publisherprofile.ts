import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
import { Seller } from "./seller";



// PublisherProfile
/** 
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
**/
export class PublisherProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audienceDescription" })
  audienceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerPitchStatement" })
  buyerPitchStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=directDealsContact" })
  directDealsContact?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=googlePlusUrl" })
  googlePlusUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaKitUrl" })
  mediaKitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApps", elemType: PublisherProfileMobileApplication })
  mobileApps?: PublisherProfileMobileApplication[];

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=programmaticDealsContact" })
  programmaticDealsContact?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=rateCardInfoUrl" })
  rateCardInfoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=samplePageUrl" })
  samplePageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
