import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterDefaultPatchBaselineResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
