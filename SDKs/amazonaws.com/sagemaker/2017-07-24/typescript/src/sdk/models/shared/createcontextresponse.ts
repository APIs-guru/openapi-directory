import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateContextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
