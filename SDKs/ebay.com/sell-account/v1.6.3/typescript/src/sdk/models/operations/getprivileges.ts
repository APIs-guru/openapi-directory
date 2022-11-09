import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPrivilegesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPrivilegesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPrivilegesSecurity;
}


export class GetPrivilegesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sellingPrivileges?: shared.SellingPrivileges;

  @Metadata()
  statusCode: number;
}
