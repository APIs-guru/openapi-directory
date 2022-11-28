import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationSummary } from "./operationsummary";



// ListOperationsResponse
/** 
 * The ListOperations response includes the following elements.
**/
export class ListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Operations", elemType: OperationSummary })
  operations: OperationSummary[];
}
