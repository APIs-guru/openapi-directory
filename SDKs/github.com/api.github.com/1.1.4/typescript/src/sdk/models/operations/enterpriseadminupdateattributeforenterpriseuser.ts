import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Operations" })
  operations: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
