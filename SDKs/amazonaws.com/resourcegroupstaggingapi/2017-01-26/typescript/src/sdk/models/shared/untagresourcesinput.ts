import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourcesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNList" })
  resourceArnList: string[];

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
