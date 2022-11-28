import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigquerydatatransferProjectsTransferConfigsRunsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum {
    RunAttemptUnspecified = "RUN_ATTEMPT_UNSPECIFIED",
    Latest = "LATEST"
}

export enum BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}


export class BigquerydatatransferProjectsTransferConfigsRunsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=runAttempt" })
  runAttempt?: BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigquerydatatransferProjectsTransferConfigsRunsListPathParams;

  @SpeakeasyMetadata()
  queryParams: BigquerydatatransferProjectsTransferConfigsRunsListQueryParams;

  @SpeakeasyMetadata()
  security: BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
}


export class BigquerydatatransferProjectsTransferConfigsRunsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTransferRunsResponse?: shared.ListTransferRunsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
