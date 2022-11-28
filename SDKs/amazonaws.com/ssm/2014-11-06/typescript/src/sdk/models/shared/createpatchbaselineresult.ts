import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePatchBaselineResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
