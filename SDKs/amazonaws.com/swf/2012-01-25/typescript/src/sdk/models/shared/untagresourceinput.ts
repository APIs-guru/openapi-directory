import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=tagKeys" })
  tagKeys: string[];
}
