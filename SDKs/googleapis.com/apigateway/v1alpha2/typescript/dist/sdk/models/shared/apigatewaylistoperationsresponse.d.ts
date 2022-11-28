import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayOperation } from "./apigatewayoperation";
/**
 * The response message for Operations.ListOperations.
**/
export declare class ApigatewayListOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: ApigatewayOperation[];
}
