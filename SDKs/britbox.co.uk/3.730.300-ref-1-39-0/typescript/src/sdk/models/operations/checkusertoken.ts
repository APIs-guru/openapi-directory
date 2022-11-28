import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckUserTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckUserTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CheckUserTokenQueryParams;
}


export class CheckUserTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
