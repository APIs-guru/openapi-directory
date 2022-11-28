import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsDeleteTagPathParams extends SpeakeasyBase {
    functionId: string;
    tagId: string;
}
export declare class FunctionsDeleteTagSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsDeleteTagRequest extends SpeakeasyBase {
    pathParams: FunctionsDeleteTagPathParams;
    security: FunctionsDeleteTagSecurity;
}
export declare class FunctionsDeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
