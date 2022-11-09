import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsGetPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsGetSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsGetRequest extends SpeakeasyBase {
    pathParams: FunctionsGetPathParams;
    security: FunctionsGetSecurity;
}
export declare class FunctionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    function?: shared.Function;
}
