import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=hometown" })
  hometown?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=jersey" })
  jersey?: number;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=teamColor" })
  teamColor?: string;

  @SpeakeasyMetadata({ data: "json, name=teamColorSecondary" })
  teamColorSecondary?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
