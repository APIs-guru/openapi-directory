import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NifComprehensivePathParams extends SpeakeasyBase {
    country: string;
}
export declare class NifComprehensiveRequestBody extends SpeakeasyBase {
    companyAddress?: string;
    companyName?: string;
    nifNumber: string;
}
export declare class NifComprehensiveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class NifComprehensiveRequest extends SpeakeasyBase {
    pathParams: NifComprehensivePathParams;
    request: NifComprehensiveRequestBody;
    security: NifComprehensiveSecurity;
}
export declare class NifComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    nifComprehensive200ApplicationJsonAny?: any;
    nifComprehensiveDefaultApplicationJsonAny?: any;
    statusCode: number;
}
