import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminDemoteSiteAdministratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminDemoteSiteAdministratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminDemoteSiteAdministratorPathParams;
}


export class EnterpriseAdminDemoteSiteAdministratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
