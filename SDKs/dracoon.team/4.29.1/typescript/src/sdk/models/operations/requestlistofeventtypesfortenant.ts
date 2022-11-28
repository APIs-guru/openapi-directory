import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestListOfEventTypesForTenantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestListOfEventTypesForTenantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestListOfEventTypesForTenantHeaders;
}


export class RequestListOfEventTypesForTenantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  eventTypeList?: shared.EventTypeList;

  @SpeakeasyMetadata()
  statusCode: number;
}
