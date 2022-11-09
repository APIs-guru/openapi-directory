import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextName" })
  contextName: string;
}
