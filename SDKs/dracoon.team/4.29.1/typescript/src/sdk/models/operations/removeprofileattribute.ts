import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveProfileAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class RemoveProfileAttributeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveProfileAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveProfileAttributePathParams;

  @Metadata()
  headers: RemoveProfileAttributeHeaders;
}


export class RemoveProfileAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
