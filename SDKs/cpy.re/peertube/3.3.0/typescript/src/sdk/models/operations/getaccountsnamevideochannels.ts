import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountsNameVideoChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetAccountsNameVideoChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withStats" })
  withStats?: boolean;
}


export class GetAccountsNameVideoChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsNameVideoChannelsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsNameVideoChannelsQueryParams;
}


export class GetAccountsNameVideoChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoChannelList?: any;
}
