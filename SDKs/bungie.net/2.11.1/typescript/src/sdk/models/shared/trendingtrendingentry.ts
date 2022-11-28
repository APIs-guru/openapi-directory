import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrendingTrendingEntry
/** 
 * The list entry view for trending items. Returns just enough to show the item on the trending page.
**/
export class TrendingTrendingEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  endDate?: Date;

  @SpeakeasyMetadata()
  entityType?: number;

  @SpeakeasyMetadata()
  featureImage?: string;

  @SpeakeasyMetadata()
  identifier?: string;

  @SpeakeasyMetadata()
  image?: string;

  @SpeakeasyMetadata()
  isFeatured?: boolean;

  @SpeakeasyMetadata({ elemType: TrendingTrendingEntry })
  items?: TrendingTrendingEntry[];

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  mp4Video?: string;

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  tagline?: string;

  @SpeakeasyMetadata()
  webmVideo?: string;

  @SpeakeasyMetadata()
  weight?: number;
}
