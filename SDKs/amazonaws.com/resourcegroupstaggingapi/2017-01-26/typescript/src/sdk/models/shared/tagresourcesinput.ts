import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourcesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNList" })
  resourceArnList: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}
