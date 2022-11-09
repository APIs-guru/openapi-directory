import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TinVerificationNameLookupQueryParams extends SpeakeasyBase {
    tin: string;
}
export declare class TinVerificationNameLookupSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class TinVerificationNameLookupRequest extends SpeakeasyBase {
    queryParams: TinVerificationNameLookupQueryParams;
    security: TinVerificationNameLookupSecurity;
}
export declare class TinVerificationNameLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tinVerificationNameLookup200ApplicationJsonAny?: any;
    tinVerificationNameLookupDefaultApplicationJsonAny?: any;
}
