import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePatchBaselineResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;
}
