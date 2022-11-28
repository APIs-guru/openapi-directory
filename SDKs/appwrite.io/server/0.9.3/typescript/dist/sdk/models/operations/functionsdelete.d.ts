import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsDeletePathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsDeleteSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsDeleteRequest extends SpeakeasyBase {
    pathParams: FunctionsDeletePathParams;
    security: FunctionsDeleteSecurity;
}
export declare class FunctionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
