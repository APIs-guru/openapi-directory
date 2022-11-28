import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveSystemRescueKeyPairQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RemoveSystemRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveSystemRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RemoveSystemRescueKeyPairQueryParams;

  @SpeakeasyMetadata()
  headers: RemoveSystemRescueKeyPairHeaders;
}


export class RemoveSystemRescueKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
