import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryResourcesBuildingsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=buildingId" })
  buildingId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}

export enum DirectoryResourcesBuildingsPatchCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED"
,    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS"
,    SourceUnspecified = "SOURCE_UNSPECIFIED"
}


export class DirectoryResourcesBuildingsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=coordinatesSource" })
  coordinatesSource?: DirectoryResourcesBuildingsPatchCoordinatesSourceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryResourcesBuildingsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryResourcesBuildingsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryResourcesBuildingsPatchPathParams;

  @Metadata()
  queryParams: DirectoryResourcesBuildingsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Building;

  @Metadata()
  security: DirectoryResourcesBuildingsPatchSecurity;
}


export class DirectoryResourcesBuildingsPatchResponse extends SpeakeasyBase {
  @Metadata()
  building?: shared.Building;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
