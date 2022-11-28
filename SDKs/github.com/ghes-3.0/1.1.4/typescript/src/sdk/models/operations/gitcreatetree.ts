import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitCreateTreePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum GitCreateTreeRequestBodyTreeModeEnum {
    OneHundredThousandSixHundredAndFortyFour = "100644",
    OneHundredThousandSevenHundredAndFiftyFive = "100755",
    FortyThousand = "040000",
    OneHundredAndSixtyThousand = "160000",
    OneHundredAndTwentyThousand = "120000"
}

export enum GitCreateTreeRequestBodyTreeTypeEnum {
    Blob = "blob",
    Tree = "tree",
    Commit = "commit"
}


export class GitCreateTreeRequestBodyTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GitCreateTreeRequestBodyTreeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GitCreateTreeRequestBodyTreeTypeEnum;
}


export class GitCreateTreeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_tree" })
  baseTree?: string;

  @SpeakeasyMetadata({ data: "json, name=tree", elemType: GitCreateTreeRequestBodyTree })
  tree: GitCreateTreeRequestBodyTree[];
}


export class GitCreateTreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitCreateTreePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitCreateTreeRequestBody;
}


export class GitCreateTreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gitTree?: shared.GitTree;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
