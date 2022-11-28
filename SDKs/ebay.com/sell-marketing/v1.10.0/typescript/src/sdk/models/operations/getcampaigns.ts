import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCampaignsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_name" })
  campaignName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_status" })
  campaignStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date_range" })
  endDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date_range" })
  startDateRange?: string;
}


export class GetCampaignsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCampaignsQueryParams;

  @SpeakeasyMetadata()
  security: GetCampaignsSecurity;
}


export class GetCampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignPagedCollection?: shared.CampaignPagedCollection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
