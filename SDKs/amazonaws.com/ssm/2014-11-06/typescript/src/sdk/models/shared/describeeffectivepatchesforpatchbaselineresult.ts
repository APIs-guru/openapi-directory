import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectivePatch } from "./effectivepatch";


export class DescribeEffectivePatchesForPatchBaselineResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EffectivePatches", elemType: shared.EffectivePatch })
  effectivePatches?: EffectivePatch[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
