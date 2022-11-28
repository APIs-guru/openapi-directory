import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpacesByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string[];
}


export class GetSpacesByIdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpacesByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSpacesByIdsQueryParams;

  @SpeakeasyMetadata()
  security: GetSpacesByIdsSecurity;
}


export class GetSpacesByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSpacesResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
