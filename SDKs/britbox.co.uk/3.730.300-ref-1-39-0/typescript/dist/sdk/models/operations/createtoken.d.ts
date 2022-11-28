import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    eeCreateTokenResponse?: shared.EeCreateTokenResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
