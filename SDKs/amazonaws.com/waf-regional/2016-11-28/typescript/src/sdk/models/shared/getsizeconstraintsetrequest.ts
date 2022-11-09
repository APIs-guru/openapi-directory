import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SizeConstraintSetId" })
  sizeConstraintSetId: string;
}
