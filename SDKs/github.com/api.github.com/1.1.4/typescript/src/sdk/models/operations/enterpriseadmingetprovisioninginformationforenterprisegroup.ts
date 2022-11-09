import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludedAttributes" })
  excludedAttributes?: string;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams;

  @Metadata()
  queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
