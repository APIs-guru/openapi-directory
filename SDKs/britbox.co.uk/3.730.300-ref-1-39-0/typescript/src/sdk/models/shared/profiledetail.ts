import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationSummary } from "./classificationsummary";
import { ClassificationSummary } from "./classificationsummary";
import { Watched } from "./watched";


export class ProfileDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookmarked" })
  bookmarked: Map<string, Date>;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=heroAutoplay" })
  heroAutoplay?: boolean;

  @Metadata({ data: "json, name=heroWithAudio" })
  heroWithAudio?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isActive" })
  isActive: boolean;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=marketingEnabled" })
  marketingEnabled: boolean;

  @Metadata({ data: "json, name=maxRatingContentFilter" })
  maxRatingContentFilter?: ClassificationSummary;

  @Metadata({ data: "json, name=minRatingPlaybackGuard" })
  minRatingPlaybackGuard?: ClassificationSummary;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pinEnabled" })
  pinEnabled: boolean;

  @Metadata({ data: "json, name=purchaseEnabled" })
  purchaseEnabled: boolean;

  @Metadata({ data: "json, name=rated" })
  rated: Map<string, number>;

  @Metadata({ data: "json, name=segments" })
  segments: string[];

  @Metadata({ data: "json, name=watched", elemType: shared.Watched })
  watched: Map<string, Watched>;
}
