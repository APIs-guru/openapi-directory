import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduleByChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;
}


export class GetScheduleByChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetScheduleByChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduleByChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScheduleByChannelQueryParams;
}


export class GetScheduleByChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
