import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemRescueKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestSystemRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestSystemRescueKeyPairRequest extends SpeakeasyBase {
    queryParams: RequestSystemRescueKeyPairQueryParams;
    headers: RequestSystemRescueKeyPairHeaders;
}
export declare class RequestSystemRescueKeyPairResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
