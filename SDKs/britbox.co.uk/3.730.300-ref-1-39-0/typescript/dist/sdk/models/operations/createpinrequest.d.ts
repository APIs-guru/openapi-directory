import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePinRequestQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class CreatePinRequestRequest extends SpeakeasyBase {
    queryParams: CreatePinRequestQueryParams;
    request: shared.EeCreatePinRequest;
}
export declare class CreatePinRequestResponse extends SpeakeasyBase {
    contentType: string;
    eeCreatePinResponse?: shared.EeCreatePinResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
