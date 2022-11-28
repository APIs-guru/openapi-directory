import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SizeConstraintSet } from "./sizeconstraintset";



export class CreateSizeConstraintSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSet" })
  sizeConstraintSet?: SizeConstraintSet;
}
