import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterDefaultPatchBaselineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId: string;
}
