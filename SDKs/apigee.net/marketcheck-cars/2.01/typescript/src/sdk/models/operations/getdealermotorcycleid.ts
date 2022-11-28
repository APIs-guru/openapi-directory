import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealerMotorcycleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDealerMotorcycleIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;
}


export class GetDealerMotorcycleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDealerMotorcycleIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDealerMotorcycleIdQueryParams;
}


export class GetDealerMotorcycleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealer?: shared.Dealer;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
