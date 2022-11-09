import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminPromoteUserToBeSiteAdministratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams;
}


export class EnterpriseAdminPromoteUserToBeSiteAdministratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
