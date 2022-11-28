import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveProfileAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class RemoveProfileAttributeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveProfileAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveProfileAttributePathParams;

  @SpeakeasyMetadata()
  headers: RemoveProfileAttributeHeaders;
}


export class RemoveProfileAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
