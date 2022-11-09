import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribeActivationsFilterKeysEnum } from "./describeactivationsfilterkeysenum";


// DescribeActivationsFilter
/** 
 * Filter for the DescribeActivation API.
**/
export class DescribeActivationsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterKey" })
  filterKey?: DescribeActivationsFilterKeysEnum;

  @Metadata({ data: "json, name=FilterValues" })
  filterValues?: string[];
}
