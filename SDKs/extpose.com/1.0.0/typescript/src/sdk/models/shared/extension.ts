import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Extension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_rating" })
  avgRating?: number;

  @SpeakeasyMetadata({ data: "json, name=extension_id" })
  extensionId?: number;

  @SpeakeasyMetadata({ data: "json, name=install_count" })
  installCount?: number;

  @SpeakeasyMetadata({ data: "json, name=prev_avg_rating" })
  prevAvgRating?: number;

  @SpeakeasyMetadata({ data: "json, name=prev_install_count" })
  prevInstallCount?: number;

  @SpeakeasyMetadata({ data: "json, name=prev_rating_count" })
  prevRatingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rating_count" })
  ratingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=update_ts" })
  updateTs?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
