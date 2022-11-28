import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsUpdateTagPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsUpdateTagRequestBody extends SpeakeasyBase {
    tag: string;
}
export declare class FunctionsUpdateTagSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsUpdateTagRequest extends SpeakeasyBase {
    pathParams: FunctionsUpdateTagPathParams;
    request?: FunctionsUpdateTagRequestBody;
    security: FunctionsUpdateTagSecurity;
}
export declare class FunctionsUpdateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    function?: shared.Function;
}
