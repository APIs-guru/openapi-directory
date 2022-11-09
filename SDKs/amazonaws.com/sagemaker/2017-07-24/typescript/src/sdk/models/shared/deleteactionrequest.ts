import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionName" })
  actionName: string;
}
