import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=messageTypes" })
  messageTypes?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams;

  @Metadata()
  queryParams: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams;

  @Metadata()
  security: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity;
}


export class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTransferLogsResponse?: shared.ListTransferLogsResponse;

  @Metadata()
  statusCode: number;
}
