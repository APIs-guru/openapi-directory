import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourcesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNList" })
  resourceArnList: string[];

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
