import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSizeConstraintSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;
}
