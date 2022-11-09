import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCampaignsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_name" })
  campaignName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_status" })
  campaignStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date_range" })
  endDateRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date_range" })
  startDateRange?: string;
}


export class GetCampaignsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCampaignsQueryParams;

  @Metadata()
  security: GetCampaignsSecurity;
}


export class GetCampaignsResponse extends SpeakeasyBase {
  @Metadata()
  campaignPagedCollection?: shared.CampaignPagedCollection;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
