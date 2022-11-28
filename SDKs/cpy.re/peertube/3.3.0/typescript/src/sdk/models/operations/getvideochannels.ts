import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetVideoChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideoChannelsQueryParams;
}


export class GetVideoChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoChannelList?: any;
}
