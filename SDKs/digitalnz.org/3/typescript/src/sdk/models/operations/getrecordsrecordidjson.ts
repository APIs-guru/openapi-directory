import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecordsRecordIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=record_id" })
  recordId: number;
}

export enum GetRecordsRecordIdJsonFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetRecordsRecordIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetRecordsRecordIdJsonFormatEnum;
}


export class GetRecordsRecordIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecordsRecordIdJsonPathParams;

  @Metadata()
  queryParams: GetRecordsRecordIdJsonQueryParams;
}


export class GetRecordsRecordIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getRecordsRecordIdJson403ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  getRecordsRecordIdJson404ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  record?: shared.Record;
}
