import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SizeConstraintSet } from "./sizeconstraintset";



export class GetSizeConstraintSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSet" })
  sizeConstraintSet?: SizeConstraintSet;
}
