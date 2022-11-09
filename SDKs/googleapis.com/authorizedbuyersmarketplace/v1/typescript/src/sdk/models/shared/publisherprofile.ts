import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";


// PublisherProfile
/** 
 * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
**/
export class PublisherProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=audienceDescription" })
  audienceDescription?: string;

  @Metadata({ data: "json, name=directDealsContact" })
  directDealsContact?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @Metadata({ data: "json, name=mediaKitUrl" })
  mediaKitUrl?: string;

  @Metadata({ data: "json, name=mobileApps", elemType: shared.PublisherProfileMobileApplication })
  mobileApps?: PublisherProfileMobileApplication[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=pitchStatement" })
  pitchStatement?: string;

  @Metadata({ data: "json, name=programmaticDealsContact" })
  programmaticDealsContact?: string;

  @Metadata({ data: "json, name=publisherCode" })
  publisherCode?: string;

  @Metadata({ data: "json, name=samplePageUrl" })
  samplePageUrl?: string;

  @Metadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
