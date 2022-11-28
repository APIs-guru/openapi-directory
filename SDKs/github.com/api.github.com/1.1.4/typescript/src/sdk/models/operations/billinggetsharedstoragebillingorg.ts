import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillingGetSharedStorageBillingOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetSharedStorageBillingOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillingGetSharedStorageBillingOrgPathParams;
}


export class BillingGetSharedStorageBillingOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
