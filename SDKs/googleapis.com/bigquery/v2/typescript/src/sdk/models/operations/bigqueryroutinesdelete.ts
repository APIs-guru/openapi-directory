import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigqueryRoutinesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routineId" })
  routineId: string;
}


export class BigqueryRoutinesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class BigqueryRoutinesDeleteSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryRoutinesDeleteSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryRoutinesDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigqueryRoutinesDeleteSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigqueryRoutinesDeleteSecurityOption2;
}


export class BigqueryRoutinesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigqueryRoutinesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: BigqueryRoutinesDeleteQueryParams;

  @SpeakeasyMetadata()
  security: BigqueryRoutinesDeleteSecurity;
}


export class BigqueryRoutinesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
