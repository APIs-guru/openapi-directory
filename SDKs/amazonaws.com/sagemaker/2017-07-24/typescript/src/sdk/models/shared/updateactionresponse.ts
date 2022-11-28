import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionArn" })
  actionArn?: string;
}
