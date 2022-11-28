import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePatch } from "./effectivepatch";



export class DescribeEffectivePatchesForPatchBaselineResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EffectivePatches", elemType: EffectivePatch })
  effectivePatches?: EffectivePatch[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
