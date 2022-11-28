import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamSrsRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
