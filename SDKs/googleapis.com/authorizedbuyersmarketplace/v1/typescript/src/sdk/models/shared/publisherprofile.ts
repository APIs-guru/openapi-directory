import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";



// PublisherProfile
/** 
 * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
**/
export class PublisherProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audienceDescription" })
  audienceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=directDealsContact" })
  directDealsContact?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaKitUrl" })
  mediaKitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApps", elemType: PublisherProfileMobileApplication })
  mobileApps?: PublisherProfileMobileApplication[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=pitchStatement" })
  pitchStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=programmaticDealsContact" })
  programmaticDealsContact?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherCode" })
  publisherCode?: string;

  @SpeakeasyMetadata({ data: "json, name=samplePageUrl" })
  samplePageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
