import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;
}
