import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourcesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNList" })
  resourceArnList: string[];

  @Metadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}
