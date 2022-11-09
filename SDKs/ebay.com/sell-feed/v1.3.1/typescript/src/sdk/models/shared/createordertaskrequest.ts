import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";


// CreateOrderTaskRequest
/** 
 * The type that defines the fields for the createOrderTask request.
**/
export class CreateOrderTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: OrderFilterCriteria;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
