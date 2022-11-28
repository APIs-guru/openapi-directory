import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitCreateTagPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
/**
 * An object with information about the individual creating the tag.
**/
export declare class GitCreateTagRequestBodyTagger extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare enum GitCreateTagRequestBodyTypeEnum {
    Commit = "commit",
    Tree = "tree",
    Blob = "blob"
}
export declare class GitCreateTagRequestBody extends SpeakeasyBase {
    message: string;
    object: string;
    tag: string;
    tagger?: GitCreateTagRequestBodyTagger;
    type: GitCreateTagRequestBodyTypeEnum;
}
export declare class GitCreateTagRequest extends SpeakeasyBase {
    pathParams: GitCreateTagPathParams;
    request?: GitCreateTagRequestBody;
}
export declare class GitCreateTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    gitTag?: shared.GitTag;
    validationError?: shared.ValidationError;
}
