import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSizeConstraintSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
