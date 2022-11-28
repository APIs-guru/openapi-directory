import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecoverUserNameRequest extends SpeakeasyBase {
    request: shared.RecoverUserNameRequest;
}
export declare class RecoverUserNameResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
