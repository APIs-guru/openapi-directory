import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WimstatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid" })
  vid?: string;
}


export class Wimstatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wim_started" })
  wimStarted?: number;

  @SpeakeasyMetadata({ data: "json, name=wim_status" })
  wimStatus?: string;
}


export class WimstatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WimstatusQueryParams;
}


export class WimstatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wimstatus200ApplicationJsonObject?: Wimstatus200ApplicationJson;
}
