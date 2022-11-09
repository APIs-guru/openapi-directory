import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EligibleItem } from "./eligibleitem";


// PagedEligibleItemCollection
/** 
 * This complex type defines a collection of listings that are eligible for an offer to a buyer.
**/
export class PagedEligibleItemCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=eligibleItems", elemType: shared.EligibleItem })
  eligibleItems?: EligibleItem[];

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
