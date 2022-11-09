import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeleteUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminDeleteUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeleteUserPathParams;
}


export class EnterpriseAdminDeleteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
