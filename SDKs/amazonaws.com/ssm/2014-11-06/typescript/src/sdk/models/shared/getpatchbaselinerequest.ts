import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatchBaselineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId: string;
}
