import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Snippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string[];

  @Metadata({ data: "json, name=text" })
  text?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string[];
}
