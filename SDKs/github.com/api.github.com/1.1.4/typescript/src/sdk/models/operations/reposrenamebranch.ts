import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRenameBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRenameBranchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=new_name" })
  newName: string;
}


export class ReposRenameBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRenameBranchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposRenameBranchRequestBody;
}


export class ReposRenameBranchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  branchWithProtection?: shared.BranchWithProtection;

  @Metadata()
  validationError?: shared.ValidationError;
}
