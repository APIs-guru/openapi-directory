import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveSystemRescueKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RemoveSystemRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveSystemRescueKeyPairRequest extends SpeakeasyBase {
    queryParams: RemoveSystemRescueKeyPairQueryParams;
    headers: RemoveSystemRescueKeyPairHeaders;
}
export declare class RemoveSystemRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
