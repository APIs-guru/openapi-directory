import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUpcomingScheduledCampaignsAndCanvasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;
}


export class GetUpcomingScheduledCampaignsAndCanvasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpcomingScheduledCampaignsAndCanvasesQueryParams;
}


export class GetUpcomingScheduledCampaignsAndCanvasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
