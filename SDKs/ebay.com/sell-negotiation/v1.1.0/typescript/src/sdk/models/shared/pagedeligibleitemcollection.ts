import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EligibleItem } from "./eligibleitem";



// PagedEligibleItemCollection
/** 
 * This complex type defines a collection of listings that are eligible for an offer to a buyer.
**/
export class PagedEligibleItemCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligibleItems", elemType: EligibleItem })
  eligibleItems?: EligibleItem[];

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
