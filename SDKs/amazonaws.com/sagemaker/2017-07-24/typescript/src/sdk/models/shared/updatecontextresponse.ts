import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateContextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextArn" })
  contextArn?: string;
}
