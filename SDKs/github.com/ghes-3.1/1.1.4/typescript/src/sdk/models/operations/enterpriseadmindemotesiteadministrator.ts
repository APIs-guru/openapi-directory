import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDemoteSiteAdministratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminDemoteSiteAdministratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDemoteSiteAdministratorPathParams;
}


export class EnterpriseAdminDemoteSiteAdministratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
