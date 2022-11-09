import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VatBasicPathParams extends SpeakeasyBase {
    country: string;
}
export declare class VatBasicRequestBody extends SpeakeasyBase {
    companyAddress?: string;
    companyName?: string;
    companyNumber?: string;
    vatNumber: string;
}
export declare class VatBasicSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class VatBasicRequest extends SpeakeasyBase {
    pathParams: VatBasicPathParams;
    request: VatBasicRequestBody;
    security: VatBasicSecurity;
}
export declare class VatBasicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vatBasic200ApplicationJsonAny?: any;
    vatBasicDefaultApplicationJsonAny?: any;
}
