import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NifBasicPathParams extends SpeakeasyBase {
    country: string;
}
export declare class NifBasicRequestBody extends SpeakeasyBase {
    companyAddress?: string;
    companyName?: string;
    nifNumber: string;
}
export declare class NifBasicSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class NifBasicRequest extends SpeakeasyBase {
    pathParams: NifBasicPathParams;
    request: NifBasicRequestBody;
    security: NifBasicSecurity;
}
export declare class NifBasicResponse extends SpeakeasyBase {
    contentType: string;
    nifBasic200ApplicationJsonAny?: any;
    nifBasicDefaultApplicationJsonAny?: any;
    statusCode: number;
}
