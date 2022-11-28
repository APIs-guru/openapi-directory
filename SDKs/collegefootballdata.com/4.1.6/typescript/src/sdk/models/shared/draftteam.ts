import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DraftTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;
}
