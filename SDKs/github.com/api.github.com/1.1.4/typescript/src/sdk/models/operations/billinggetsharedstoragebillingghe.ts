import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetSharedStorageBillingGhePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetSharedStorageBillingGheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetSharedStorageBillingGhePathParams;
}


export class BillingGetSharedStorageBillingGheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
