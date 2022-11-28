import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsGetRevisionPathParams extends SpeakeasyBase {
    gistId: string;
    sha: string;
}
export declare class GistsGetRevisionRequest extends SpeakeasyBase {
    pathParams: GistsGetRevisionPathParams;
}
export declare class GistsGetRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistSimple?: shared.GistSimple;
    validationError?: shared.ValidationError;
}
