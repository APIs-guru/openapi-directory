import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
