import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubActionsBillingOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetGithubActionsBillingOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubActionsBillingOrgPathParams;
}


export class BillingGetGithubActionsBillingOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
