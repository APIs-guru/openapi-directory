import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminDeleteUserFromEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class EnterpriseAdminDeleteUserFromEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminDeleteUserFromEnterprisePathParams;
}


export class EnterpriseAdminDeleteUserFromEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
