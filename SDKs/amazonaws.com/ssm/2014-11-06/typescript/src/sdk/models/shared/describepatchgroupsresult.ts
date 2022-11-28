import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchGroupPatchBaselineMapping } from "./patchgrouppatchbaselinemapping";



export class DescribePatchGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mappings", elemType: PatchGroupPatchBaselineMapping })
  mappings?: PatchGroupPatchBaselineMapping[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
