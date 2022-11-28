import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventCategoriesMap
/** 
 * Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.
**/
export class EventCategoriesMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
