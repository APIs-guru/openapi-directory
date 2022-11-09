import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitCreateTreePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum GitCreateTreeRequestBodyTreeModeEnum {
    OneHundredThousandSixHundredAndFortyFour = "100644"
,    OneHundredThousandSevenHundredAndFiftyFive = "100755"
,    FortyThousand = "040000"
,    OneHundredAndSixtyThousand = "160000"
,    OneHundredAndTwentyThousand = "120000"
}

export enum GitCreateTreeRequestBodyTreeTypeEnum {
    Blob = "blob"
,    Tree = "tree"
,    Commit = "commit"
}


export class GitCreateTreeRequestBodyTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: GitCreateTreeRequestBodyTreeModeEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=type" })
  type?: GitCreateTreeRequestBodyTreeTypeEnum;
}


export class GitCreateTreeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_tree" })
  baseTree?: string;

  @Metadata({ data: "json, name=tree", elemType: operations.GitCreateTreeRequestBodyTree })
  tree: GitCreateTreeRequestBodyTree[];
}


export class GitCreateTreeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitCreateTreePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitCreateTreeRequestBody;
}


export class GitCreateTreeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gitTree?: shared.GitTree;

  @Metadata()
  validationError?: shared.ValidationError;
}
