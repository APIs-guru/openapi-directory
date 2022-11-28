import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsCheckIsStarredPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsCheckIsStarredRequest extends SpeakeasyBase {
    pathParams: GistsCheckIsStarredPathParams;
}
export declare class GistsCheckIsStarredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistsCheckIsStarred404ApplicationJsonObject?: Map<string, any>;
}
