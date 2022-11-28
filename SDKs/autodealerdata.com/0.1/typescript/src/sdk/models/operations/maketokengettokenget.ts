import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MakeTokenGetTokenGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class MakeTokenGetTokenGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MakeTokenGetTokenGetQueryParams;
}


export class MakeTokenGetTokenGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  jsonWebToken?: shared.JsonWebToken;

  @SpeakeasyMetadata()
  statusCode: number;
}
