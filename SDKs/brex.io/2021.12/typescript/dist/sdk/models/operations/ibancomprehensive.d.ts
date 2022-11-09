import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IbanComprehensiveRequestBody extends SpeakeasyBase {
    ibanNumber: string;
}
export declare class IbanComprehensiveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class IbanComprehensiveRequest extends SpeakeasyBase {
    request: IbanComprehensiveRequestBody;
    security: IbanComprehensiveSecurity;
}
export declare class IbanComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    ibanComprehensiveDefaultApplicationJsonAny?: any;
    statusCode: number;
    oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema?: any;
}
