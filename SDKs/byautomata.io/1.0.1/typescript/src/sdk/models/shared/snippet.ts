import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Snippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string[];
}
