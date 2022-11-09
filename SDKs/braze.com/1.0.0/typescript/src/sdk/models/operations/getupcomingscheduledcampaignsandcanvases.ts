import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUpcomingScheduledCampaignsAndCanvasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;
}


export class GetUpcomingScheduledCampaignsAndCanvasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpcomingScheduledCampaignsAndCanvasesQueryParams;
}


export class GetUpcomingScheduledCampaignsAndCanvasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
