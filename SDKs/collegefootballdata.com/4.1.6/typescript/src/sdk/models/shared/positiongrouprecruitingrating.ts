import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PositionGroupRecruitingRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @SpeakeasyMetadata({ data: "json, name=averageStars" })
  averageStars?: number;

  @SpeakeasyMetadata({ data: "json, name=commits" })
  commits?: number;

  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=positionGroup" })
  positionGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=totalRating" })
  totalRating?: number;
}
