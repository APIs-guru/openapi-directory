import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitCreateTreePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum GitCreateTreeRequestBodyTreeModeEnum {
    OneHundredThousandSixHundredAndFortyFour = "100644",
    OneHundredThousandSevenHundredAndFiftyFive = "100755",
    FortyThousand = "040000",
    OneHundredAndSixtyThousand = "160000",
    OneHundredAndTwentyThousand = "120000"
}
export declare enum GitCreateTreeRequestBodyTreeTypeEnum {
    Blob = "blob",
    Tree = "tree",
    Commit = "commit"
}
export declare class GitCreateTreeRequestBodyTree extends SpeakeasyBase {
    content?: string;
    mode?: GitCreateTreeRequestBodyTreeModeEnum;
    path?: string;
    sha?: string;
    type?: GitCreateTreeRequestBodyTreeTypeEnum;
}
export declare class GitCreateTreeRequestBody extends SpeakeasyBase {
    baseTree?: string;
    tree: GitCreateTreeRequestBodyTree[];
}
export declare class GitCreateTreeRequest extends SpeakeasyBase {
    pathParams: GitCreateTreePathParams;
    request?: GitCreateTreeRequestBody;
}
export declare class GitCreateTreeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gitTree?: shared.GitTree;
    validationError?: shared.ValidationError;
}
