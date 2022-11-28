import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAndPreserveUserKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateAndPreserveUserKeyPairRequest extends SpeakeasyBase {
    headers: CreateAndPreserveUserKeyPairHeaders;
    request: shared.CreateKeyPairRequest;
}
export declare class CreateAndPreserveUserKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
