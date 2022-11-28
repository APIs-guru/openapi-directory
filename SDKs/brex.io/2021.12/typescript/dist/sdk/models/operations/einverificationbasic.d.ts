import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EinVerificationBasicQueryParams extends SpeakeasyBase {
    ein: string;
}
export declare class EinVerificationBasicSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class EinVerificationBasicRequest extends SpeakeasyBase {
    queryParams: EinVerificationBasicQueryParams;
    security: EinVerificationBasicSecurity;
}
export declare class EinVerificationBasicResponse extends SpeakeasyBase {
    contentType: string;
    einVerificationBasic200ApplicationJsonAny?: any;
    einVerificationBasicDefaultApplicationJsonAny?: any;
    statusCode: number;
}
