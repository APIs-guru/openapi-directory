import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestListOfEventTypesForTenantHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestListOfEventTypesForTenantRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestListOfEventTypesForTenantHeaders;
}


export class RequestListOfEventTypesForTenantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventTypeList?: shared.EventTypeList;

  @Metadata()
  statusCode: number;
}
