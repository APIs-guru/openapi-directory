import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SizeConstraintSet } from "./sizeconstraintset";


export class GetSizeConstraintSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SizeConstraintSet" })
  sizeConstraintSet?: SizeConstraintSet;
}
