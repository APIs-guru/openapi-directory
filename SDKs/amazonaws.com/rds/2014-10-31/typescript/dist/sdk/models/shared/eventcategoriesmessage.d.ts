import { SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";
/**
 * Data returned from the <code>DescribeEventCategories</code> operation.
**/
export declare class EventCategoriesMessage extends SpeakeasyBase {
    eventCategoriesMapList?: EventCategoriesMap[];
}
