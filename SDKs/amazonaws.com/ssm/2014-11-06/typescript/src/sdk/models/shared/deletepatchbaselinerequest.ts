import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;
}
