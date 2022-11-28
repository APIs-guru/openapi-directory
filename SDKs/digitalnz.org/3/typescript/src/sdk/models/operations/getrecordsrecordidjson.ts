import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecordsRecordIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=record_id" })
  recordId: number;
}

export enum GetRecordsRecordIdJsonFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetRecordsRecordIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetRecordsRecordIdJsonFormatEnum;
}


export class GetRecordsRecordIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecordsRecordIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRecordsRecordIdJsonQueryParams;
}


export class GetRecordsRecordIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRecordsRecordIdJson403ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getRecordsRecordIdJson404ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  record?: shared.Record;
}
