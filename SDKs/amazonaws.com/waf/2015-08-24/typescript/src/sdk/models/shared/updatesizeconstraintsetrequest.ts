import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SizeConstraintSetUpdate } from "./sizeconstraintsetupdate";


export class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.SizeConstraintSetUpdate })
  updates: SizeConstraintSetUpdate[];
}
