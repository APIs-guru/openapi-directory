import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetCommitAuthorsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class MigrationsGetCommitAuthorsQueryParams extends SpeakeasyBase {
    since?: number;
}
export declare class MigrationsGetCommitAuthorsRequest extends SpeakeasyBase {
    pathParams: MigrationsGetCommitAuthorsPathParams;
    queryParams: MigrationsGetCommitAuthorsQueryParams;
}
export declare class MigrationsGetCommitAuthorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    porterAuthors?: shared.PorterAuthor[];
}
