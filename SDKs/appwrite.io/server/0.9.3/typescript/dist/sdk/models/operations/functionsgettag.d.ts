import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsGetTagPathParams extends SpeakeasyBase {
    functionId: string;
    tagId: string;
}
export declare class FunctionsGetTagSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsGetTagRequest extends SpeakeasyBase {
    pathParams: FunctionsGetTagPathParams;
    security: FunctionsGetTagSecurity;
}
export declare class FunctionsGetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
