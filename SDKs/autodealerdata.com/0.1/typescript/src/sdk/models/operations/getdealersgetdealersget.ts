import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealersGetDealersGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode: number;
}


export class GetDealersGetDealersGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealersGetDealersGetQueryParams;
}


export class GetDealersGetDealersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealershipDataResp?: shared.DealershipDataResp;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
