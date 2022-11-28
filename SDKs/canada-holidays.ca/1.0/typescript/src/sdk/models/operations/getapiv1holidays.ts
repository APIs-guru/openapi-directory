import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1HolidaysFederalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}


export class GetApiV1HolidaysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal" })
  federal?: GetApiV1HolidaysFederalEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetApiV1Holidays200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holidays", elemType: shared.Holiday })
  holidays?: shared.Holiday[];
}


export class GetApiV1HolidaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1HolidaysQueryParams;
}


export class GetApiV1HolidaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApiV1Holidays200ApplicationJsonObject?: GetApiV1Holidays200ApplicationJson;
}
