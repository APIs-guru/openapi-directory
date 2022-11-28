import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Url extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
