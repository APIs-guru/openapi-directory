import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Operations" })
  operations: Map<string, any>[];

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
