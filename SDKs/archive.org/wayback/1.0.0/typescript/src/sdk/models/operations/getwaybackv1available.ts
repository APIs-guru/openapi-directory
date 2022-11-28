import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWaybackV1AvailableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=closest" })
  closest?: shared.ClosestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status_code" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetWaybackV1AvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWaybackV1AvailableQueryParams;
}


export class GetWaybackV1AvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityResults?: shared.AvailabilityResults;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
