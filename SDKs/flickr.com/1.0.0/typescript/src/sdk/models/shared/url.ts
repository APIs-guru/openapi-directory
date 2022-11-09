import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Url extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
