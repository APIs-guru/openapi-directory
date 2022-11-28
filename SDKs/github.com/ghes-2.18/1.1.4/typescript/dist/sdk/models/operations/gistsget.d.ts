import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsGetPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsGet403ApplicationJsonBlock extends SpeakeasyBase {
    createdAt?: string;
    htmlUrl?: string;
    reason?: string;
}
export declare class GistsGet403ApplicationJson extends SpeakeasyBase {
    block?: GistsGet403ApplicationJsonBlock;
    documentationUrl?: string;
    message?: string;
}
export declare class GistsGetRequest extends SpeakeasyBase {
    pathParams: GistsGetPathParams;
}
export declare class GistsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistSimple?: shared.GistSimple;
    gistsGet403ApplicationJsonObject?: GistsGet403ApplicationJson;
}
