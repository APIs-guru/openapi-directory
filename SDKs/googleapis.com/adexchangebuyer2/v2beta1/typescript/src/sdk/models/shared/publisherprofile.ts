import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
import { Seller } from "./seller";


// PublisherProfile
/** 
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
**/
export class PublisherProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=audienceDescription" })
  audienceDescription?: string;

  @Metadata({ data: "json, name=buyerPitchStatement" })
  buyerPitchStatement?: string;

  @Metadata({ data: "json, name=directDealsContact" })
  directDealsContact?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=googlePlusUrl" })
  googlePlusUrl?: string;

  @Metadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @Metadata({ data: "json, name=mediaKitUrl" })
  mediaKitUrl?: string;

  @Metadata({ data: "json, name=mobileApps", elemType: shared.PublisherProfileMobileApplication })
  mobileApps?: PublisherProfileMobileApplication[];

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=programmaticDealsContact" })
  programmaticDealsContact?: string;

  @Metadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @Metadata({ data: "json, name=rateCardInfoUrl" })
  rateCardInfoUrl?: string;

  @Metadata({ data: "json, name=samplePageUrl" })
  samplePageUrl?: string;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
