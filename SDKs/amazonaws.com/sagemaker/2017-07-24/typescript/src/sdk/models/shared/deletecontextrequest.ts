import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName: string;
}
