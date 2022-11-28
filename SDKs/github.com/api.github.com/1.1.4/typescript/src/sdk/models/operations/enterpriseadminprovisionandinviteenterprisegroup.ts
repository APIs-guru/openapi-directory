import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers })
  members?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers[];

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
