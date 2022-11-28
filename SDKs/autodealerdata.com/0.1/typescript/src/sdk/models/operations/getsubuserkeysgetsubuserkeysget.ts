import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubUserKeysGetSubUserKeysGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class GetSubUserKeysGetSubUserKeysGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSubUserKeysGetSubUserKeysGetQueryParams;
}


export class GetSubUserKeysGetSubUserKeysGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericResponse?: shared.GenericResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
