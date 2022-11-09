import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetVideoChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVideoChannelsQueryParams;
}


export class GetVideoChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoChannelList?: any;
}
