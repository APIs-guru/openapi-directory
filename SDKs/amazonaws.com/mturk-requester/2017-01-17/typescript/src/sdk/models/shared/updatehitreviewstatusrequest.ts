import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateHitReviewStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;

  @SpeakeasyMetadata({ data: "json, name=Revert" })
  revert?: boolean;
}
