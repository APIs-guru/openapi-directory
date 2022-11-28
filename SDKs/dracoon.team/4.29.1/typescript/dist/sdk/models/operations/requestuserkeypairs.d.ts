import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserKeyPairsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUserKeyPairsRequest extends SpeakeasyBase {
    headers: RequestUserKeyPairsHeaders;
}
export declare class RequestUserKeyPairsResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainers?: shared.UserKeyPairContainerOutput[];
}
