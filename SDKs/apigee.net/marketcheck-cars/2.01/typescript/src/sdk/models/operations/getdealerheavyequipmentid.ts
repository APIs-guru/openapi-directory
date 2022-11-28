import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealerHeavyEquipmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDealerHeavyEquipmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;
}


export class GetDealerHeavyEquipmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDealerHeavyEquipmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDealerHeavyEquipmentIdQueryParams;
}


export class GetDealerHeavyEquipmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealer?: shared.Dealer;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
