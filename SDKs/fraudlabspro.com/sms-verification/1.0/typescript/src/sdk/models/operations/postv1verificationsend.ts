import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostV1VerificationSendFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class PostV1VerificationSendQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1VerificationSendFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mesg" })
  mesg?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tel" })
  tel: string;
}


export class PostV1VerificationSendRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostV1VerificationSendQueryParams;
}


export class PostV1VerificationSendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postV1VerificationSend200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
