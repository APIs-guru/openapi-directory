import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposRenameBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRenameBranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=new_name" })
  newName: string;
}


export class ReposRenameBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposRenameBranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposRenameBranchRequestBody;
}


export class ReposRenameBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  branchWithProtection?: shared.BranchWithProtection;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
