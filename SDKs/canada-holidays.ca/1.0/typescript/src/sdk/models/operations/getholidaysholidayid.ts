import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHolidaysHolidayIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holidayId" })
  holidayId: number;
}


export class GetHolidaysHolidayIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetHolidaysHolidayId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holiday" })
  holiday?: shared.Holiday;
}


export class GetHolidaysHolidayId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: shared.Error;
}


export class GetHolidaysHolidayIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHolidaysHolidayIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetHolidaysHolidayIdQueryParams;
}


export class GetHolidaysHolidayIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHolidaysHolidayId200ApplicationJsonObject?: GetHolidaysHolidayId200ApplicationJson;

  @SpeakeasyMetadata()
  getHolidaysHolidayId404ApplicationJsonObject?: GetHolidaysHolidayId404ApplicationJson;
}
