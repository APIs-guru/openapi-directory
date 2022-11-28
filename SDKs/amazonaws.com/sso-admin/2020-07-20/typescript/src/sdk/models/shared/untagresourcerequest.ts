import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
