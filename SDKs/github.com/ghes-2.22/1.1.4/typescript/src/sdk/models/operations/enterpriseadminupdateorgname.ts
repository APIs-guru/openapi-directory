import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminUpdateOrgNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class EnterpriseAdminUpdateOrgNameRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=login" })
  login: string;
}


export class EnterpriseAdminUpdateOrgNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateOrgNamePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateOrgNameRequestBody;
}


export class EnterpriseAdminUpdateOrgName202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseAdminUpdateOrgNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminUpdateOrgName202ApplicationJsonObject?: EnterpriseAdminUpdateOrgName202ApplicationJson;
}
