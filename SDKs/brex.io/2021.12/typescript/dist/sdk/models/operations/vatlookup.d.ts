import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VatLookupPathParams extends SpeakeasyBase {
    country: string;
}
export declare class VatLookupRequestBody extends SpeakeasyBase {
    address?: string;
    name: string;
}
export declare class VatLookupSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class VatLookupRequest extends SpeakeasyBase {
    pathParams: VatLookupPathParams;
    request: VatLookupRequestBody;
    security: VatLookupSecurity;
}
export declare class VatLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vatLookup200ApplicationJsonAny?: any;
    vatLookupDefaultApplicationJsonAny?: any;
}
