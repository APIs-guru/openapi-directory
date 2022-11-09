import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubPackagesBillingGhePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetGithubPackagesBillingGheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubPackagesBillingGhePathParams;
}


export class BillingGetGithubPackagesBillingGheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  packagesBillingUsage?: shared.PackagesBillingUsage;
}
