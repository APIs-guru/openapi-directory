import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWaybackV1AvailableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=closest" })
  closest?: shared.ClosestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status_code" })
  statusCode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetWaybackV1AvailableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWaybackV1AvailableQueryParams;
}


export class GetWaybackV1AvailableResponse extends SpeakeasyBase {
  @Metadata()
  availabilityResults?: shared.AvailabilityResults;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
