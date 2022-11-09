import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpacesByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string[];
}


export class GetSpacesByIdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpacesByIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSpacesByIdsQueryParams;

  @Metadata()
  security: GetSpacesByIdsSecurity;
}


export class GetSpacesByIdsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getSpacesResult?: any;

  @Metadata()
  statusCode: number;
}
