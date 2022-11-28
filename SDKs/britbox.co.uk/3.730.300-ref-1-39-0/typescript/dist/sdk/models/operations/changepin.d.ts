import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePinQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ChangePinSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ChangePinRequest extends SpeakeasyBase {
    queryParams: ChangePinQueryParams;
    request: shared.ChangePinRequest;
    security: ChangePinSecurity;
}
export declare class ChangePinResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
