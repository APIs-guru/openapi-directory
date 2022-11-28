import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSizeConstraintSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
