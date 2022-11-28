import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DirectoryResourcesBuildingsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buildingId" })
  buildingId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}

export enum DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED",
    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS",
    SourceUnspecified = "SOURCE_UNSPECIFIED"
}


export class DirectoryResourcesBuildingsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinatesSource" })
  coordinatesSource?: DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryResourcesBuildingsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryResourcesBuildingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DirectoryResourcesBuildingsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: DirectoryResourcesBuildingsUpdateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Building;

  @SpeakeasyMetadata()
  security: DirectoryResourcesBuildingsUpdateSecurity;
}


export class DirectoryResourcesBuildingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  building?: shared.Building;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
