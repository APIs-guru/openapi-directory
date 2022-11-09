import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VatLevelTwoPathParams extends SpeakeasyBase {
    country: string;
}
export declare class VatLevelTwoRequestBody extends SpeakeasyBase {
    confirmation?: boolean;
    vatNumber: string;
}
export declare class VatLevelTwoSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class VatLevelTwoRequest extends SpeakeasyBase {
    pathParams: VatLevelTwoPathParams;
    request: VatLevelTwoRequestBody;
    security: VatLevelTwoSecurity;
}
export declare class VatLevelTwoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vatLevelTwo200ApplicationJsonAny?: any;
    vatLevelTwoDefaultApplicationJsonAny?: any;
}
