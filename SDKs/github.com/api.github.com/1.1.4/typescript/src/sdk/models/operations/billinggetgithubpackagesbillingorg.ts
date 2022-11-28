import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetGithubPackagesBillingOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetGithubPackagesBillingOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetGithubPackagesBillingOrgPathParams;
}


export class BillingGetGithubPackagesBillingOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packagesBillingUsage?: shared.PackagesBillingUsage;
}
