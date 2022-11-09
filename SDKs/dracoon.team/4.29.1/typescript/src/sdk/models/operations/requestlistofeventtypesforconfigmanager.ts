import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestListOfEventTypesForConfigManagerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestListOfEventTypesForConfigManagerRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestListOfEventTypesForConfigManagerHeaders;
}


export class RequestListOfEventTypesForConfigManagerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventTypeList?: shared.EventTypeList;

  @Metadata()
  statusCode: number;
}
