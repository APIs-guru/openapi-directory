import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TinVerificationBasicCheckQueryParams extends SpeakeasyBase {
    name: string;
    tin: string;
}
export declare class TinVerificationBasicCheckSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class TinVerificationBasicCheckRequest extends SpeakeasyBase {
    queryParams: TinVerificationBasicCheckQueryParams;
    security: TinVerificationBasicCheckSecurity;
}
export declare class TinVerificationBasicCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tinVerificationBasicCheck200ApplicationJsonAny?: any;
    tinVerificationBasicCheckDefaultApplicationJsonAny?: any;
}
