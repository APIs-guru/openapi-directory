import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAndPreserveKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateAndPreserveKeyPairRequest extends SpeakeasyBase {
    headers: CreateAndPreserveKeyPairHeaders;
    request: shared.CreateKeyPairRequest;
}
export declare class CreateAndPreserveKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
