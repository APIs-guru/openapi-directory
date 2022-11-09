import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposSetAdminBranchProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetAdminBranchProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposSetAdminBranchProtectionPathParams;
}


export class ReposSetAdminBranchProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
