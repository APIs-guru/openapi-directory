import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealerMotorcycleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDealerMotorcycleIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;
}


export class GetDealerMotorcycleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDealerMotorcycleIdPathParams;

  @Metadata()
  queryParams: GetDealerMotorcycleIdQueryParams;
}


export class GetDealerMotorcycleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealer?: shared.Dealer;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
