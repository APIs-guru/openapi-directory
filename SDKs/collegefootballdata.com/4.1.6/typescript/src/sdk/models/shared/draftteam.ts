import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DraftTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;
}
