import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUserFileKeysHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetUserFileKeysRequest extends SpeakeasyBase {
    headers: SetUserFileKeysHeaders;
    request: shared.UserFileKeySetBatchRequest;
}
export declare class SetUserFileKeysResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
