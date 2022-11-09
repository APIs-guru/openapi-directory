import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApiV1HolidaysFederalEnum {
    One = "1"
,    Zero = "0"
,    True = "true"
,    False = "false"
}


export class GetApiV1HolidaysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=federal" })
  federal?: GetApiV1HolidaysFederalEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetApiV1HolidaysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1HolidaysQueryParams;
}


export class GetApiV1Holidays200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=holidays", elemType: shared.Holiday })
  holidays?: shared.Holiday[];
}


export class GetApiV1HolidaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getApiV1Holidays200ApplicationJsonObject?: GetApiV1Holidays200ApplicationJson;
}
