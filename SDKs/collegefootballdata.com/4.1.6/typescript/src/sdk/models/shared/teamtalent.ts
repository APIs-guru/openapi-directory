import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamTalent extends SpeakeasyBase {
  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=talent" })
  talent?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
