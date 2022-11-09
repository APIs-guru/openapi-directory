import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostReportsOptionEnum {
    ValidatePayload = "ValidatePayload"
,    CheckConnections = "CheckConnections"
,    SendImmediately = "SendImmediately"
,    SkipSend = "SkipSend"
,    SkipInvalidItems = "SkipInvalidItems"
}


export class PostReportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=default" })
  default?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: PostReportsOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeTo" })
  routeTo?: string[];
}


export class PostReportsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostReportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostReportsQueryParams;

  @Metadata({ data: "request, media_type=text/csv" })
  request: string;

  @Metadata()
  security: PostReportsSecurity;
}


export class PostReportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  report?: shared.Report;

  @Metadata()
  statusCode: number;
}
