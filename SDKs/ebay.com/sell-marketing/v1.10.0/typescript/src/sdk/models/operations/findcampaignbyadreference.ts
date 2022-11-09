import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindCampaignByAdReferenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_id" })
  inventoryReferenceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_type" })
  inventoryReferenceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listing_id" })
  listingId?: string;
}


export class FindCampaignByAdReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindCampaignByAdReferenceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindCampaignByAdReferenceQueryParams;

  @Metadata()
  security: FindCampaignByAdReferenceSecurity;
}


export class FindCampaignByAdReferenceResponse extends SpeakeasyBase {
  @Metadata()
  campaigns?: shared.Campaigns;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
