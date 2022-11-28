import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Chapter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
