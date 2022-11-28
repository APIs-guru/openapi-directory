import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigquerydatatransferProjectsTransferConfigsStartManualRunsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2;
}


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigquerydatatransferProjectsTransferConfigsStartManualRunsPathParams;

  @SpeakeasyMetadata()
  queryParams: BigquerydatatransferProjectsTransferConfigsStartManualRunsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.StartManualTransferRunsRequest;

  @SpeakeasyMetadata()
  security: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity;
}


export class BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startManualTransferRunsResponse?: shared.StartManualTransferRunsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
