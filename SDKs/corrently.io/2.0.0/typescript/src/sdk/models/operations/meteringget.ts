import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MeteringGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class MeteringGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MeteringGetQueryParams;
}


export class MeteringGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=1.8.0" })
  one80?: number;

  @Metadata({ data: "json, name=1.8.1" })
  one81?: number;

  @Metadata({ data: "json, name=1.8.2" })
  one82?: number;

  @Metadata({ data: "json, name=_processingTime" })
  processingTime?: number;

  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @Metadata({ data: "json, name=co2_g_standard" })
  co2GStandard?: number;

  @Metadata({ data: "json, name=credits" })
  credits?: any;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: number;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class MeteringGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  meteringGet200ApplicationJsonObject?: MeteringGet200ApplicationJson;
}
