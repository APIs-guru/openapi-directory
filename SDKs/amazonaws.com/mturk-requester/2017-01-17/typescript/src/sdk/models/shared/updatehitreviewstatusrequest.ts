import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateHitReviewStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITId" })
  hitId: string;

  @Metadata({ data: "json, name=Revert" })
  revert?: boolean;
}
