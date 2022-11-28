import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SizeConstraintSetUpdate } from "./sizeconstraintsetupdate";



export class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: SizeConstraintSetUpdate })
  updates: SizeConstraintSetUpdate[];
}
