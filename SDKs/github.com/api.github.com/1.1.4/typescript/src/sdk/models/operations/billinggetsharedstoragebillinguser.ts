import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetSharedStorageBillingUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class BillingGetSharedStorageBillingUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetSharedStorageBillingUserPathParams;
}


export class BillingGetSharedStorageBillingUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
