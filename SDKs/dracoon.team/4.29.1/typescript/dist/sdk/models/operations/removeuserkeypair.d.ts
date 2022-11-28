import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RemoveUserKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveUserKeyPairRequest extends SpeakeasyBase {
    queryParams: RemoveUserKeyPairQueryParams;
    headers: RemoveUserKeyPairHeaders;
}
export declare class RemoveUserKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
