import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAdConfigsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAdConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestAdConfigsHeaders;
}


export class RequestAdConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryConfigList?: shared.ActiveDirectoryConfigList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
