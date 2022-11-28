import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetAdminBranchProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAdminBranchProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetAdminBranchProtectionPathParams;
}


export class ReposGetAdminBranchProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
