import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePatchBaselineResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
