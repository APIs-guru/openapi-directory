import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GsiBesthourQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hours" })
  hours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiBesthourRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GsiBesthourQueryParams;
}


export class GsiBesthourResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gsiBesthour200ApplicationJsonBoolean?: boolean;
}
