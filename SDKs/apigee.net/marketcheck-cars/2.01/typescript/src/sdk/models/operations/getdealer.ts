import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDealerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: boolean;
}


export class GetDealerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDealerPathParams;

  @Metadata()
  queryParams: GetDealerQueryParams;
}


export class GetDealerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealer?: shared.Dealer;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
