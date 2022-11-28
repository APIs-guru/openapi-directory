import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers })
  members?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers[];

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
