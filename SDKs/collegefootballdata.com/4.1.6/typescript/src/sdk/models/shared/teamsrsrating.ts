import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamSrsRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=division" })
  division?: string;

  @Metadata({ data: "json, name=ranking" })
  ranking?: number;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
