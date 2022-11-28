import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetSharedStorageBillingUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class BillingGetSharedStorageBillingUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetSharedStorageBillingUserPathParams;
}


export class BillingGetSharedStorageBillingUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
