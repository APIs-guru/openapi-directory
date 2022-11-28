import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EinVerificationLookupQueryParams extends SpeakeasyBase {
    name: string;
    state?: string;
    tight?: boolean;
    zip?: string;
}
export declare class EinVerificationLookupSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class EinVerificationLookupRequest extends SpeakeasyBase {
    queryParams: EinVerificationLookupQueryParams;
    security: EinVerificationLookupSecurity;
}
export declare class EinVerificationLookupResponse extends SpeakeasyBase {
    contentType: string;
    einVerificationLookup200ApplicationJsonAny?: any;
    einVerificationLookupDefaultApplicationJsonAny?: any;
    statusCode: number;
}
