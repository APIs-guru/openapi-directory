import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItemRelatedItemsFilterKeyEnum } from "./opsitemrelateditemsfilterkeyenum";
import { OpsItemRelatedItemsFilterOperatorEnum } from "./opsitemrelateditemsfilteroperatorenum";


// OpsItemRelatedItemsFilter
/** 
 * Describes a filter for a specific list of related-item resources. 
**/
export class OpsItemRelatedItemsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: OpsItemRelatedItemsFilterKeyEnum;

  @Metadata({ data: "json, name=Operator" })
  operator: OpsItemRelatedItemsFilterOperatorEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
