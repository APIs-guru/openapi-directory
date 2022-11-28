import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionArn" })
  actionArn?: string;
}
