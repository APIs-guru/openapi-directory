import { SpeakeasyBase } from "../../../internal/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";
/**
 * The type that defines the fields for the createOrderTask request.
**/
export declare class CreateOrderTaskRequest extends SpeakeasyBase {
    feedType?: string;
    filterCriteria?: OrderFilterCriteria;
    schemaVersion?: string;
}
