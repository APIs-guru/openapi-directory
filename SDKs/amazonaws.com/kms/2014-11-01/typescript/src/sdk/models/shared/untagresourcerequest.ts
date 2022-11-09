import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
