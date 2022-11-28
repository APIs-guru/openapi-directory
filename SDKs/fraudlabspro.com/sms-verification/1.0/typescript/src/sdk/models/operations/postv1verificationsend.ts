import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostV1VerificationSendFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class PostV1VerificationSendQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1VerificationSendFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mesg" })
  mesg?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tel" })
  tel: string;
}


export class PostV1VerificationSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostV1VerificationSendQueryParams;
}


export class PostV1VerificationSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postV1VerificationSend200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
