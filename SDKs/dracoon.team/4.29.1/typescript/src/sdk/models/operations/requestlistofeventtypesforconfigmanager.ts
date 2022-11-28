import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestListOfEventTypesForConfigManagerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestListOfEventTypesForConfigManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestListOfEventTypesForConfigManagerHeaders;
}


export class RequestListOfEventTypesForConfigManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  eventTypeList?: shared.EventTypeList;

  @SpeakeasyMetadata()
  statusCode: number;
}
