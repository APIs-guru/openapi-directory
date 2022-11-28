import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "json, name=tagKeys" })
  tagKeys: string[];
}
