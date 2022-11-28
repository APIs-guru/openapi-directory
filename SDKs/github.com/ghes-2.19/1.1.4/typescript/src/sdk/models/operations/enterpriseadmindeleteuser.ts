import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminDeleteUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminDeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminDeleteUserPathParams;
}


export class EnterpriseAdminDeleteUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
