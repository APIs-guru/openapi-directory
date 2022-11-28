import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchBaselineIdentity } from "./patchbaselineidentity";



export class DescribePatchBaselinesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineIdentities", elemType: PatchBaselineIdentity })
  baselineIdentities?: PatchBaselineIdentity[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
