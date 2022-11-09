import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TariffcomponentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=kwha" })
  kwha?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=milliseconds" })
  milliseconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wh" })
  wh?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zipcode" })
  zipcode?: string;
}


export class TariffcomponentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TariffcomponentsQueryParams;
}


export class TariffcomponentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  componentsh0?: shared.Componentsh0;
}
