import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubActionsBillingGhePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetGithubActionsBillingGheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubActionsBillingGhePathParams;
}


export class BillingGetGithubActionsBillingGheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
