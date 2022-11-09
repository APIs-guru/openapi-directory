import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeleteScimGroupFromEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}


export class EnterpriseAdminDeleteScimGroupFromEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeleteScimGroupFromEnterprisePathParams;
}


export class EnterpriseAdminDeleteScimGroupFromEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
