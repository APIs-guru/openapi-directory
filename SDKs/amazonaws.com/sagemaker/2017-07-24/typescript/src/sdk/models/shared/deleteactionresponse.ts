import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionArn" })
  actionArn?: string;
}
