import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resource" })
  resource: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
