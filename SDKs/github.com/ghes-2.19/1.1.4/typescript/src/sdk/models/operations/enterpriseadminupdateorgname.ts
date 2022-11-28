import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminUpdateOrgNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class EnterpriseAdminUpdateOrgNameRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}


export class EnterpriseAdminUpdateOrgName202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseAdminUpdateOrgNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateOrgNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateOrgNameRequestBody;
}


export class EnterpriseAdminUpdateOrgNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminUpdateOrgName202ApplicationJsonObject?: EnterpriseAdminUpdateOrgName202ApplicationJson;
}
