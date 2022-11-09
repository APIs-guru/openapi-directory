import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Extension extends SpeakeasyBase {
  @Metadata({ data: "json, name=avg_rating" })
  avgRating?: number;

  @Metadata({ data: "json, name=extension_id" })
  extensionId?: number;

  @Metadata({ data: "json, name=install_count" })
  installCount?: number;

  @Metadata({ data: "json, name=prev_avg_rating" })
  prevAvgRating?: number;

  @Metadata({ data: "json, name=prev_install_count" })
  prevInstallCount?: number;

  @Metadata({ data: "json, name=prev_rating_count" })
  prevRatingCount?: number;

  @Metadata({ data: "json, name=rating_count" })
  ratingCount?: number;

  @Metadata({ data: "json, name=update_ts" })
  updateTs?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
