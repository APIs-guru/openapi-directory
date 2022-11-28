import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// NestedFilters
/** 
 * <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul>
**/
export class NestedFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter })
  filters: Filter[];

  @SpeakeasyMetadata({ data: "json, name=NestedPropertyName" })
  nestedPropertyName: string;
}
