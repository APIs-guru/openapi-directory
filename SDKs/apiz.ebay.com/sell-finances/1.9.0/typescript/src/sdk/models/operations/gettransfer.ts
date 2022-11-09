import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transfer_Id" })
  transferId: string;
}


export class GetTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransferPathParams;

  @Metadata()
  security: GetTransferSecurity;
}


export class GetTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transfer?: shared.Transfer;
}
