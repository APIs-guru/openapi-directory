import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperationSummary } from "./operationsummary";


// ListOperationsResponse
/** 
 * The ListOperations response includes the following elements.
**/
export class ListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;

  @Metadata({ data: "json, name=Operations", elemType: shared.OperationSummary })
  operations: OperationSummary[];
}
