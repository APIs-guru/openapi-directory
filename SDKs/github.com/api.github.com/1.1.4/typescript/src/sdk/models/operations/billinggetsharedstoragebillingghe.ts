import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetSharedStorageBillingGhePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class BillingGetSharedStorageBillingGheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetSharedStorageBillingGhePathParams;
}


export class BillingGetSharedStorageBillingGheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
