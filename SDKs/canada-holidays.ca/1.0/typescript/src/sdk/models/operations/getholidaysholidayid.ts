import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHolidaysHolidayIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=holidayId" })
  holidayId: number;
}


export class GetHolidaysHolidayIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetHolidaysHolidayIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHolidaysHolidayIdPathParams;

  @Metadata()
  queryParams: GetHolidaysHolidayIdQueryParams;
}


export class GetHolidaysHolidayId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=holiday" })
  holiday?: shared.Holiday;
}


export class GetHolidaysHolidayId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: shared.Error;
}


export class GetHolidaysHolidayIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getHolidaysHolidayId200ApplicationJsonObject?: GetHolidaysHolidayId200ApplicationJson;

  @Metadata()
  getHolidaysHolidayId404ApplicationJsonObject?: GetHolidaysHolidayId404ApplicationJson;
}
