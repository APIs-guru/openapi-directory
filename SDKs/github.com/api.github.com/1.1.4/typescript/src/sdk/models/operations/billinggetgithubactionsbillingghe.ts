import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetGithubActionsBillingGhePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetGithubActionsBillingGheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetGithubActionsBillingGhePathParams;
}


export class BillingGetGithubActionsBillingGheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
