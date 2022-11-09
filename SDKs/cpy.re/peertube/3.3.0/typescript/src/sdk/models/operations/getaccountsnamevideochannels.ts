import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountsNameVideoChannelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetAccountsNameVideoChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withStats" })
  withStats?: boolean;
}


export class GetAccountsNameVideoChannelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsNameVideoChannelsPathParams;

  @Metadata()
  queryParams: GetAccountsNameVideoChannelsQueryParams;
}


export class GetAccountsNameVideoChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoChannelList?: any;
}
