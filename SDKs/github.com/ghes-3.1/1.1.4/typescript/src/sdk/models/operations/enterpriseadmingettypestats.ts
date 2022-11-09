import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminGetTypeStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class EnterpriseAdminGetTypeStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetTypeStatsPathParams;
}


export class EnterpriseAdminGetTypeStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminGetTypeStats200ApplicationJsonAnyOf?: any;
}
