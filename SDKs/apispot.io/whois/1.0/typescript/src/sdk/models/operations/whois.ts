import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WhoisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}

export enum WhoisFormatEnum {
    Raw = "raw"
,    Formatted = "formatted"
,    Json = "json"
}


export class WhoisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: WhoisFormatEnum;
}


export class WhoisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WhoisPathParams;

  @Metadata()
  queryParams: WhoisQueryParams;
}


export class WhoisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
