import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemsFilterKeyEnum } from "./opsitemrelateditemsfilterkeyenum";
import { OpsItemRelatedItemsFilterOperatorEnum } from "./opsitemrelateditemsfilteroperatorenum";



// OpsItemRelatedItemsFilter
/** 
 * Describes a filter for a specific list of related-item resources. 
**/
export class OpsItemRelatedItemsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: OpsItemRelatedItemsFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Operator" })
  operator: OpsItemRelatedItemsFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
