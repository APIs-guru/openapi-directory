import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePatchBaselineResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
