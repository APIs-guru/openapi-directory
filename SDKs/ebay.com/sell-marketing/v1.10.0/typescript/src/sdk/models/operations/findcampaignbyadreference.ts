import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindCampaignByAdReferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_id" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_type" })
  inventoryReferenceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_id" })
  listingId?: string;
}


export class FindCampaignByAdReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindCampaignByAdReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindCampaignByAdReferenceQueryParams;

  @SpeakeasyMetadata()
  security: FindCampaignByAdReferenceSecurity;
}


export class FindCampaignByAdReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaigns?: shared.Campaigns;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
