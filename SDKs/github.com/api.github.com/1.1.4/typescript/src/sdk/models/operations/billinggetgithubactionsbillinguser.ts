import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetGithubActionsBillingUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class BillingGetGithubActionsBillingUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetGithubActionsBillingUserPathParams;
}


export class BillingGetGithubActionsBillingUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
