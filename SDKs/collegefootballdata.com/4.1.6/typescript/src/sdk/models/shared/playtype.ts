import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
