import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchGroupPatchBaselineMapping } from "./patchgrouppatchbaselinemapping";


export class DescribePatchGroupsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mappings", elemType: shared.PatchGroupPatchBaselineMapping })
  mappings?: PatchGroupPatchBaselineMapping[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
