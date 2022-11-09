import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdsByInventoryReferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_id" })
  inventoryReferenceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_type" })
  inventoryReferenceType: string;
}


export class GetAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdsByInventoryReferencePathParams;

  @Metadata()
  queryParams: GetAdsByInventoryReferenceQueryParams;

  @Metadata()
  security: GetAdsByInventoryReferenceSecurity;
}


export class GetAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata()
  ads?: shared.Ads;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
