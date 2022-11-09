import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=members", elemType: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers })
  members?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers[];

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
