import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
