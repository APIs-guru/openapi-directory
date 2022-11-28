import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPrivilegesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPrivilegesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPrivilegesSecurity;
}


export class GetPrivilegesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sellingPrivileges?: shared.SellingPrivileges;

  @SpeakeasyMetadata()
  statusCode: number;
}
