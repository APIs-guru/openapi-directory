import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeActivationsFilterKeysEnum } from "./describeactivationsfilterkeysenum";



// DescribeActivationsFilter
/** 
 * Filter for the DescribeActivation API.
**/
export class DescribeActivationsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterKey" })
  filterKey?: DescribeActivationsFilterKeysEnum;

  @SpeakeasyMetadata({ data: "json, name=FilterValues" })
  filterValues?: string[];
}
