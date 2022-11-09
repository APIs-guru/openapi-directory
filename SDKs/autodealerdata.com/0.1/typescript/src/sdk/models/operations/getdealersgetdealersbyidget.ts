import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealersGetDealersByIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dealerID" })
  dealerId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetDealersGetDealersByIdGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealersGetDealersByIdGetQueryParams;
}


export class GetDealersGetDealersByIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealershipDataResp?: shared.DealershipDataResp;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
