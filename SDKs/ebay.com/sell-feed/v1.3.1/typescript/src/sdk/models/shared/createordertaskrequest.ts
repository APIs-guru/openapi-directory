import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";



// CreateOrderTaskRequest
/** 
 * The type that defines the fields for the createOrderTask request.
**/
export class CreateOrderTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: OrderFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
