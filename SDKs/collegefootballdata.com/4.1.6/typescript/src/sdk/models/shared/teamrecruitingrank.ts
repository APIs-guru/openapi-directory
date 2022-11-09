import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamRecruitingRank extends SpeakeasyBase {
  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
