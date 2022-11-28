import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayOperation } from "./apigatewayoperation";



// ApigatewayListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class ApigatewayListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: ApigatewayOperation })
  operations?: ApigatewayOperation[];
}
