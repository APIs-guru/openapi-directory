import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateHitTypeOfHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;

  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;
}
