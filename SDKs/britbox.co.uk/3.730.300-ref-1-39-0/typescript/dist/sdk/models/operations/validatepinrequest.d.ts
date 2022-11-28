import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidatePinRequestQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ValidatePinRequestRequest extends SpeakeasyBase {
    queryParams: ValidatePinRequestQueryParams;
    request: shared.EeValidatePinRequest;
}
export declare class ValidatePinRequestResponse extends SpeakeasyBase {
    contentType: string;
    eeValidatePinResponse?: shared.EeValidatePinResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
