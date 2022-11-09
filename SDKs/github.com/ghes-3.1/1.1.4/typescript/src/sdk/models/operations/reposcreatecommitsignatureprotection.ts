import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateCommitSignatureProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateCommitSignatureProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateCommitSignatureProtectionPathParams;
}


export class ReposCreateCommitSignatureProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
