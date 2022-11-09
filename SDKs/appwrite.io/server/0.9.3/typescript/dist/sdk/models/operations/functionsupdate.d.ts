import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsUpdatePathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsUpdateRequestBody extends SpeakeasyBase {
    events?: string[];
    execute: string[];
    name: string;
    schedule?: string;
    timeout?: number;
    vars?: Map<string, any>;
}
export declare class FunctionsUpdateSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsUpdateRequest extends SpeakeasyBase {
    pathParams: FunctionsUpdatePathParams;
    request?: FunctionsUpdateRequestBody;
    security: FunctionsUpdateSecurity;
}
export declare class FunctionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    function?: shared.Function;
}
