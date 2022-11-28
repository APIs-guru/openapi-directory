import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetGithubPackagesBillingGhePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetGithubPackagesBillingGheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetGithubPackagesBillingGhePathParams;
}


export class BillingGetGithubPackagesBillingGheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packagesBillingUsage?: shared.PackagesBillingUsage;
}
