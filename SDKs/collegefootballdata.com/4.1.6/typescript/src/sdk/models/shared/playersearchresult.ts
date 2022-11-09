import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=hometown" })
  hometown?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=jersey" })
  jersey?: number;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=teamColor" })
  teamColor?: string;

  @Metadata({ data: "json, name=teamColorSecondary" })
  teamColorSecondary?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
