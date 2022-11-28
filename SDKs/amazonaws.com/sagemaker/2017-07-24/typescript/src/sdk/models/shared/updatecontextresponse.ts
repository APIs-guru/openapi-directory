import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
