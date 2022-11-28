import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealItem } from "./dealitem";



// DealItemSearchResponse
/** 
 * The result set for the deal item search.
**/
export class DealItemSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealItems", elemType: DealItem })
  dealItems?: DealItem[];

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
