import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
