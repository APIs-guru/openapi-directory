import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchFilter } from "./patchfilter";


// PatchFilterGroup
/** 
 * A set of patch filters, typically used for approval rules.
**/
export class PatchFilterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=PatchFilters", elemType: shared.PatchFilter })
  patchFilters: PatchFilter[];
}
