import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdsByInventoryReferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_id" })
  inventoryReferenceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_type" })
  inventoryReferenceType: string;
}


export class GetAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdsByInventoryReferencePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAdsByInventoryReferenceQueryParams;

  @SpeakeasyMetadata()
  security: GetAdsByInventoryReferenceSecurity;
}


export class GetAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ads?: shared.Ads;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
