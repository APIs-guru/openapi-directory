import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TinVerificationComprehensiveCheckQueryParams extends SpeakeasyBase {
    name: string;
    threshold?: number;
    tin: string;
}
export declare class TinVerificationComprehensiveCheckSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class TinVerificationComprehensiveCheckRequest extends SpeakeasyBase {
    queryParams: TinVerificationComprehensiveCheckQueryParams;
    security: TinVerificationComprehensiveCheckSecurity;
}
export declare class TinVerificationComprehensiveCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tinVerificationComprehensiveCheck200ApplicationJsonAny?: any;
    tinVerificationComprehensiveCheckDefaultApplicationJsonAny?: any;
}
