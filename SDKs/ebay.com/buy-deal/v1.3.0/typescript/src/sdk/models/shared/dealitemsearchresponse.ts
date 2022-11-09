import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealItem } from "./dealitem";


// DealItemSearchResponse
/** 
 * The result set for the deal item search.
**/
export class DealItemSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealItems", elemType: shared.DealItem })
  dealItems?: DealItem[];

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
