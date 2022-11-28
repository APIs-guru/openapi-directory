import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EinVerificationComprehensiveQueryParams extends SpeakeasyBase {
    ein: string;
}
export declare class EinVerificationComprehensiveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class EinVerificationComprehensiveRequest extends SpeakeasyBase {
    queryParams: EinVerificationComprehensiveQueryParams;
    security: EinVerificationComprehensiveSecurity;
}
export declare class EinVerificationComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    einVerificationComprehensive200ApplicationJsonAny?: any;
    einVerificationComprehensiveDefaultApplicationJsonAny?: any;
    statusCode: number;
}
