import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubPackagesBillingUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class BillingGetGithubPackagesBillingUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubPackagesBillingUserPathParams;
}


export class BillingGetGithubPackagesBillingUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  packagesBillingUsage?: shared.PackagesBillingUsage;
}
