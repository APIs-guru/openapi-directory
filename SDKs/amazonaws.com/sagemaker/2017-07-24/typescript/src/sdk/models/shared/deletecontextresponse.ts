import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
