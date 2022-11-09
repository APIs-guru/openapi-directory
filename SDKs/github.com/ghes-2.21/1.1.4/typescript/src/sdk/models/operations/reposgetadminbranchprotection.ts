import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetAdminBranchProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAdminBranchProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetAdminBranchProtectionPathParams;
}


export class ReposGetAdminBranchProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
