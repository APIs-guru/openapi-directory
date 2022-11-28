import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSizeConstraintSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;
}
