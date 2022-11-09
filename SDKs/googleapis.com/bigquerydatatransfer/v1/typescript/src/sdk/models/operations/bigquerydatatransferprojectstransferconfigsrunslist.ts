import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigquerydatatransferProjectsTransferConfigsRunsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum {
    RunAttemptUnspecified = "RUN_ATTEMPT_UNSPECIFIED"
,    Latest = "LATEST"
}

export enum BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


export class BigquerydatatransferProjectsTransferConfigsRunsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=runAttempt" })
  runAttempt?: BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigquerydatatransferProjectsTransferConfigsRunsListPathParams;

  @Metadata()
  queryParams: BigquerydatatransferProjectsTransferConfigsRunsListQueryParams;

  @Metadata()
  security: BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTransferRunsResponse?: shared.ListTransferRunsResponse;

  @Metadata()
  statusCode: number;
}
