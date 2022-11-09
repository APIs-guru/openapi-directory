import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=channels" })
  channels: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=hour" })
  hour: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=intersect" })
  intersect?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesQueryParams;
}


export class GetSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ItemScheduleList })
  itemScheduleLists?: shared.ItemScheduleList[];

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
