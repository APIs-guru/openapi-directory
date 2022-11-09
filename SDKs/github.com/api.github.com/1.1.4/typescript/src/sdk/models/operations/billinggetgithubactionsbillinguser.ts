import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetGithubActionsBillingUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class BillingGetGithubActionsBillingUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetGithubActionsBillingUserPathParams;
}


export class BillingGetGithubActionsBillingUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsBillingUsage?: shared.ActionsBillingUsage;
}
