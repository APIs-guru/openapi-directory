import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TariffcomponentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kwha" })
  kwha?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=milliseconds" })
  milliseconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wh" })
  wh?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipcode" })
  zipcode?: string;
}


export class TariffcomponentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TariffcomponentsQueryParams;
}


export class TariffcomponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  componentsh0?: shared.Componentsh0;
}
