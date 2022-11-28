import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName: string;
}
