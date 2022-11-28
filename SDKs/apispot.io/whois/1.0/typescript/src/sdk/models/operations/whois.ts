import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WhoisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}

export enum WhoisFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}


export class WhoisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: WhoisFormatEnum;
}


export class WhoisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WhoisPathParams;

  @SpeakeasyMetadata()
  queryParams: WhoisQueryParams;
}


export class WhoisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
