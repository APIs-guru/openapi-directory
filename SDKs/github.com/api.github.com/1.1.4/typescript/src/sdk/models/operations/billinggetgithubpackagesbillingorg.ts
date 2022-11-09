import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubPackagesBillingOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetGithubPackagesBillingOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubPackagesBillingOrgPathParams;
}


export class BillingGetGithubPackagesBillingOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  packagesBillingUsage?: shared.PackagesBillingUsage;
}
