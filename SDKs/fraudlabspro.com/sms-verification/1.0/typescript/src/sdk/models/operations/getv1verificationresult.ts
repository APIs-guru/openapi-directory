import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1VerificationResultFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1VerificationResultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1VerificationResultFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=otp" })
  otp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tran_id" })
  tranId: string;
}


export class GetV1VerificationResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV1VerificationResultQueryParams;
}


export class GetV1VerificationResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getV1VerificationResult200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
