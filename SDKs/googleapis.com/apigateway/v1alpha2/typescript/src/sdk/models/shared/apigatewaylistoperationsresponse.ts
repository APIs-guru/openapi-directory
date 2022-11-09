import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayOperation } from "./apigatewayoperation";


// ApigatewayListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class ApigatewayListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.ApigatewayOperation })
  operations?: ApigatewayOperation[];
}
