import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WimstatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=vid" })
  vid?: string;
}


export class WimstatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WimstatusQueryParams;
}


export class Wimstatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=wim_started" })
  wimStarted?: number;

  @Metadata({ data: "json, name=wim_status" })
  wimStatus?: string;
}


export class WimstatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wimstatus200ApplicationJsonObject?: Wimstatus200ApplicationJson;
}
