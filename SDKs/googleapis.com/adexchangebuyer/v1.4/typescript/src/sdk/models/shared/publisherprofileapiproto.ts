import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileApplication } from "./mobileapplication";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";


export class PublisherProfileApiProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=buyerPitchStatement" })
  buyerPitchStatement?: string;

  @Metadata({ data: "json, name=directContact" })
  directContact?: string;

  @Metadata({ data: "json, name=exchange" })
  exchange?: string;

  @Metadata({ data: "json, name=forecastInventory" })
  forecastInventory?: string;

  @Metadata({ data: "json, name=googlePlusLink" })
  googlePlusLink?: string;

  @Metadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @Metadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @Metadata({ data: "json, name=mediaKitLink" })
  mediaKitLink?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: number;

  @Metadata({ data: "json, name=programmaticContact" })
  programmaticContact?: string;

  @Metadata({ data: "json, name=publisherAppIds" })
  publisherAppIds?: string[];

  @Metadata({ data: "json, name=publisherApps", elemType: shared.MobileApplication })
  publisherApps?: MobileApplication[];

  @Metadata({ data: "json, name=publisherDomains" })
  publisherDomains?: string[];

  @Metadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @Metadata({ data: "json, name=publisherProvidedForecast" })
  publisherProvidedForecast?: PublisherProvidedForecast;

  @Metadata({ data: "json, name=rateCardInfoLink" })
  rateCardInfoLink?: string;

  @Metadata({ data: "json, name=samplePageLink" })
  samplePageLink?: string;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
