import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventCategoriesMap
/** 
 * Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
**/
export class EventCategoriesMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
