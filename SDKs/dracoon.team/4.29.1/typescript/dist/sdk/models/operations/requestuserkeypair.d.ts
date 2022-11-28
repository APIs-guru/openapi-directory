import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestUserKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUserKeyPairRequest extends SpeakeasyBase {
    queryParams: RequestUserKeyPairQueryParams;
    headers: RequestUserKeyPairHeaders;
}
export declare class RequestUserKeyPairResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
