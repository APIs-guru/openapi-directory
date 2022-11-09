import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduleByChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel" })
  channel: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;
}


export class GetScheduleByChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetScheduleByChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduleByChannelPathParams;

  @Metadata()
  queryParams: GetScheduleByChannelQueryParams;
}


export class GetScheduleByChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
