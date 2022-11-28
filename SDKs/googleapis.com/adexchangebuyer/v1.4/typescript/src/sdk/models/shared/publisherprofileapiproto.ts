import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileApplication } from "./mobileapplication";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";



export class PublisherProfileApiProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerPitchStatement" })
  buyerPitchStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=directContact" })
  directContact?: string;

  @SpeakeasyMetadata({ data: "json, name=exchange" })
  exchange?: string;

  @SpeakeasyMetadata({ data: "json, name=forecastInventory" })
  forecastInventory?: string;

  @SpeakeasyMetadata({ data: "json, name=googlePlusLink" })
  googlePlusLink?: string;

  @SpeakeasyMetadata({ data: "json, name=isParent" })
  isParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaKitLink" })
  mediaKitLink?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: number;

  @SpeakeasyMetadata({ data: "json, name=programmaticContact" })
  programmaticContact?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherAppIds" })
  publisherAppIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=publisherApps", elemType: MobileApplication })
  publisherApps?: MobileApplication[];

  @SpeakeasyMetadata({ data: "json, name=publisherDomains" })
  publisherDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProvidedForecast" })
  publisherProvidedForecast?: PublisherProvidedForecast;

  @SpeakeasyMetadata({ data: "json, name=rateCardInfoLink" })
  rateCardInfoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=samplePageLink" })
  samplePageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=topHeadlines" })
  topHeadlines?: string[];
}
