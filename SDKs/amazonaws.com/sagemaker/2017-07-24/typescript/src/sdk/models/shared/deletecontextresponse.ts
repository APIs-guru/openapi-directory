import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
