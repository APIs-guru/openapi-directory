import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetGithubActionsBillingOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetGithubActionsBillingOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetGithubActionsBillingOrgPathParams;
}


export class BillingGetGithubActionsBillingOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
