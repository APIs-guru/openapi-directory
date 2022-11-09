import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;
}
