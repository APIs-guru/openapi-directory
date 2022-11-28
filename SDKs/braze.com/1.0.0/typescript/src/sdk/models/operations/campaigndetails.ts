import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CampaignDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;
}


export class CampaignDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CampaignDetailsQueryParams;
}


export class CampaignDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
