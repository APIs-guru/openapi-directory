import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReisezentrenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetReisezentrenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReisezentrenQueryParams;
}


export class GetReisezentrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TravelCenter })
  travelCenterList?: shared.TravelCenter[];
}
