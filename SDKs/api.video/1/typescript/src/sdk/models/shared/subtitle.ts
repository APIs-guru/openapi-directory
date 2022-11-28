import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Subtitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=srclang" })
  srclang?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
