import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganicResult
/** 
 * The result of a organic search request
**/
export class OrganicResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
