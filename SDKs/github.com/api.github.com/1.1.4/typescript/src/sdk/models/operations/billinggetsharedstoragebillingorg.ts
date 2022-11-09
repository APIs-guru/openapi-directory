import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillingGetSharedStorageBillingOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class BillingGetSharedStorageBillingOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillingGetSharedStorageBillingOrgPathParams;
}


export class BillingGetSharedStorageBillingOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  combinedBillingUsage?: shared.CombinedBillingUsage;
}
