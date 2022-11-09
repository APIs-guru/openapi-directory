import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsCreateRequestBody extends SpeakeasyBase {
    events?: string[];
    execute: string[];
    name: string;
    runtime: string;
    schedule?: string;
    timeout?: number;
    vars?: Map<string, any>;
}
export declare class FunctionsCreateSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsCreateRequest extends SpeakeasyBase {
    request?: FunctionsCreateRequestBody;
    security: FunctionsCreateSecurity;
}
export declare class FunctionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    function?: shared.Function;
}
