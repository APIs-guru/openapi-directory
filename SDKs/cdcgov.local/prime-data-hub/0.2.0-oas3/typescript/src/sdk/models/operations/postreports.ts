import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostReportsOptionEnum {
    ValidatePayload = "ValidatePayload",
    CheckConnections = "CheckConnections",
    SendImmediately = "SendImmediately",
    SkipSend = "SkipSend",
    SkipInvalidItems = "SkipInvalidItems"
}


export class PostReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=default" })
  default?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" })
  option?: PostReportsOptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeTo" })
  routeTo?: string[];
}


export class PostReportsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReportsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  request: string;

  @SpeakeasyMetadata()
  security: PostReportsSecurity;
}


export class PostReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  report?: shared.Report;

  @SpeakeasyMetadata()
  statusCode: number;
}
