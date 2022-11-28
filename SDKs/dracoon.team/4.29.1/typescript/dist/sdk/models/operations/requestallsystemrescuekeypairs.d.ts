import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAllSystemRescueKeyPairsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestAllSystemRescueKeyPairsRequest extends SpeakeasyBase {
    headers: RequestAllSystemRescueKeyPairsHeaders;
}
export declare class RequestAllSystemRescueKeyPairsResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainers?: shared.UserKeyPairContainerOutput[];
}
