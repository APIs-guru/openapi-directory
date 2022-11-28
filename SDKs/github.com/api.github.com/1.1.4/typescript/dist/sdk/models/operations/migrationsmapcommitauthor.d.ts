import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsMapCommitAuthorPathParams extends SpeakeasyBase {
    authorId: number;
    owner: string;
    repo: string;
}
export declare class MigrationsMapCommitAuthorRequestBody extends SpeakeasyBase {
    email?: string;
    name?: string;
    remoteId?: string;
}
export declare class MigrationsMapCommitAuthorRequest extends SpeakeasyBase {
    pathParams: MigrationsMapCommitAuthorPathParams;
    request?: MigrationsMapCommitAuthorRequestBody;
}
export declare class MigrationsMapCommitAuthorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    porterAuthor?: shared.PorterAuthor;
    validationError?: shared.ValidationError;
}
