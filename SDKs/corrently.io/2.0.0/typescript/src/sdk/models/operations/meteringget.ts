import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeteringGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class MeteringGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=1.8.0" })
  one80?: number;

  @SpeakeasyMetadata({ data: "json, name=1.8.1" })
  one81?: number;

  @SpeakeasyMetadata({ data: "json, name=1.8.2" })
  one82?: number;

  @SpeakeasyMetadata({ data: "json, name=_processingTime" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @SpeakeasyMetadata({ data: "json, name=co2_g_standard" })
  co2GStandard?: number;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: any;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: number;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class MeteringGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MeteringGetQueryParams;
}


export class MeteringGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meteringGet200ApplicationJsonObject?: MeteringGet200ApplicationJson;
}
