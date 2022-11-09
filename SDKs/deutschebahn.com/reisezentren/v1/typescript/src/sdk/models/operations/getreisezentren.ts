import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReisezentrenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetReisezentrenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReisezentrenQueryParams;
}


export class GetReisezentrenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TravelCenter })
  travelCenterList?: shared.TravelCenter[];
}
