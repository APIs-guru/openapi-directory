import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionArn" })
  actionArn?: string;
}
