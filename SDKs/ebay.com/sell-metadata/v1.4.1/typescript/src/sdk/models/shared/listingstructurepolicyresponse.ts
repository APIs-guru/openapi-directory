import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListingStructurePolicy } from "./listingstructurepolicy";
import { Error } from "./error";


export class ListingStructurePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=listingStructurePolicies", elemType: shared.ListingStructurePolicy })
  listingStructurePolicies?: ListingStructurePolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
