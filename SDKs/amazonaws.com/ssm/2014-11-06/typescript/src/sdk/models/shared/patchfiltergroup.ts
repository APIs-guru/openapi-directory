import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchFilter } from "./patchfilter";



// PatchFilterGroup
/** 
 * A set of patch filters, typically used for approval rules.
**/
export class PatchFilterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PatchFilters", elemType: PatchFilter })
  patchFilters: PatchFilter[];
}
