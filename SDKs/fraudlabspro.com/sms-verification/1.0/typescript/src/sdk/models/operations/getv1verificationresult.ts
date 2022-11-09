import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1VerificationResultFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1VerificationResultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1VerificationResultFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=otp" })
  otp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tran_id" })
  tranId: string;
}


export class GetV1VerificationResultRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV1VerificationResultQueryParams;
}


export class GetV1VerificationResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getV1VerificationResult200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
