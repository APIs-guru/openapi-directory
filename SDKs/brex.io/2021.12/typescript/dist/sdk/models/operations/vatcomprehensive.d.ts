import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VatComprehensivePathParams extends SpeakeasyBase {
    country: string;
}
export declare class VatComprehensiveRequestBody extends SpeakeasyBase {
    companyAddress?: string;
    companyName?: string;
    companyNumber?: string;
    vatNumber: string;
}
export declare class VatComprehensiveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class VatComprehensiveRequest extends SpeakeasyBase {
    pathParams: VatComprehensivePathParams;
    request: VatComprehensiveRequestBody;
    security: VatComprehensiveSecurity;
}
export declare class VatComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vatComprehensive200ApplicationJsonAny?: any;
    vatComprehensiveDefaultApplicationJsonAny?: any;
}
