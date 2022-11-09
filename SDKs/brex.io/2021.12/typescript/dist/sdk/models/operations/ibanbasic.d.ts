import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IbanBasicRequestBody extends SpeakeasyBase {
    ibanNumber: string;
}
export declare class IbanBasicSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class IbanBasicRequest extends SpeakeasyBase {
    request: IbanBasicRequestBody;
    security: IbanBasicSecurity;
}
export declare class IbanBasicResponse extends SpeakeasyBase {
    contentType: string;
    ibanBasic200ApplicationJsonAny?: any;
    ibanBasicDefaultApplicationJsonAny?: any;
    statusCode: number;
}
