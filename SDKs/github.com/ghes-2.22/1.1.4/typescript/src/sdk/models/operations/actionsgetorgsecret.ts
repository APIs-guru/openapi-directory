import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsGetOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetOrgSecretPathParams;
}


export class ActionsGetOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  organizationActionsSecret?: shared.OrganizationActionsSecret;
}
