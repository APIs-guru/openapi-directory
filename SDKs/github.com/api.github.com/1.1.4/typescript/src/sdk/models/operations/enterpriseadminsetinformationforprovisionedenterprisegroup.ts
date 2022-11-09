import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=members", elemType: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers })
  members?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers[];

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody;
}


export class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
