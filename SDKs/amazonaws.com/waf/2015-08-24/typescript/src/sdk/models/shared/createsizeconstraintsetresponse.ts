import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SizeConstraintSet } from "./sizeconstraintset";


export class CreateSizeConstraintSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=SizeConstraintSet" })
  sizeConstraintSet?: SizeConstraintSet;
}
