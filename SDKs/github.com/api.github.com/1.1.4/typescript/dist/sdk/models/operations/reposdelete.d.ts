import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeletePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposDelete403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class ReposDeleteRequest extends SpeakeasyBase {
    pathParams: ReposDeletePathParams;
}
export declare class ReposDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposDelete403ApplicationJsonObject?: ReposDelete403ApplicationJson;
}
