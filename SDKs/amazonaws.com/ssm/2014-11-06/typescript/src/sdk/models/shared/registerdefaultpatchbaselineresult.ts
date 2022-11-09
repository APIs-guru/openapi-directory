import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterDefaultPatchBaselineResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
