import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsWorkspaceRepositoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetTeamsWorkspaceRepositoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsWorkspaceRepositoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsWorkspaceRepositoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsWorkspaceRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsWorkspaceRepositoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsWorkspaceRepositoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsWorkspaceRepositoriesSecurityOption3;
}


export class GetTeamsWorkspaceRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsWorkspaceRepositoriesPathParams;

  @Metadata()
  security: GetTeamsWorkspaceRepositoriesSecurity;
}


export class GetTeamsWorkspaceRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
