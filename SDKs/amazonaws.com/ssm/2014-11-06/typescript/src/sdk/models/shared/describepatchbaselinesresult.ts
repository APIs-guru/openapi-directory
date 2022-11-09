import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchBaselineIdentity } from "./patchbaselineidentity";


export class DescribePatchBaselinesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineIdentities", elemType: shared.PatchBaselineIdentity })
  baselineIdentities?: PatchBaselineIdentity[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
