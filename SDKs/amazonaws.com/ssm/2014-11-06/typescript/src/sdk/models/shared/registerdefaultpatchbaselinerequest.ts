import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterDefaultPatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;
}
