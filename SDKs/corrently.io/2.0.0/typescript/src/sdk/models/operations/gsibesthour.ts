import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GsiBesthourQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" })
  timeframe?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiBesthourRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GsiBesthourQueryParams;
}


export class GsiBesthourResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gsiBesthour200ApplicationJsonBoolean?: boolean;
}
