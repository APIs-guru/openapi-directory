import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFavoritePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class AddFavoriteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class AddFavoriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFavoritePathParams;

  @SpeakeasyMetadata()
  headers: AddFavoriteHeaders;
}


export class AddFavoriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;
}
