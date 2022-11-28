import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Watched } from "./watched";



export class ProfileDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookmarked" })
  bookmarked: Map<string, Date>;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=heroAutoplay" })
  heroAutoplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heroWithAudio" })
  heroWithAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingEnabled" })
  marketingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxRatingContentFilter" })
  maxRatingContentFilter?: ClassificationSummary;

  @SpeakeasyMetadata({ data: "json, name=minRatingPlaybackGuard" })
  minRatingPlaybackGuard?: ClassificationSummary;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pinEnabled" })
  pinEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=purchaseEnabled" })
  purchaseEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=rated" })
  rated: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments: string[];

  @SpeakeasyMetadata({ data: "json, name=watched", elemType: Watched })
  watched: Map<string, Watched>;
}
