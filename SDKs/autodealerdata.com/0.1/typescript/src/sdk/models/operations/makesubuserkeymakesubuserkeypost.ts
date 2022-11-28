import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MakeSubUserKeyMakeSubUserKeyPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteName" })
  siteName?: string;
}


export class MakeSubUserKeyMakeSubUserKeyPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MakeSubUserKeyMakeSubUserKeyPostQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EndpointList;
}


export class MakeSubUserKeyMakeSubUserKeyPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subUserJsonWebToken?: shared.SubUserJsonWebToken;
}
