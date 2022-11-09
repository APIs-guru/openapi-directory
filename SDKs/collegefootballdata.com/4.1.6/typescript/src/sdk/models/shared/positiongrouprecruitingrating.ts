import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PositionGroupRecruitingRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @Metadata({ data: "json, name=averageStars" })
  averageStars?: number;

  @Metadata({ data: "json, name=commits" })
  commits?: number;

  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=positionGroup" })
  positionGroup?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=totalRating" })
  totalRating?: number;
}
