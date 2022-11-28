import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludedAttributes" })
  excludedAttributes?: string;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
}


export class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
