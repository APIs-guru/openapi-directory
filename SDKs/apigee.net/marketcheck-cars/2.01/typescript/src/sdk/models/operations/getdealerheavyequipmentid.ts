import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealerHeavyEquipmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDealerHeavyEquipmentIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;
}


export class GetDealerHeavyEquipmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDealerHeavyEquipmentIdPathParams;

  @Metadata()
  queryParams: GetDealerHeavyEquipmentIdQueryParams;
}


export class GetDealerHeavyEquipmentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealer?: shared.Dealer;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
