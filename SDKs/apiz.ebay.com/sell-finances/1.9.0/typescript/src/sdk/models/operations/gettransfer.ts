import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transfer_Id" })
  transferId: string;
}


export class GetTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransferPathParams;

  @SpeakeasyMetadata()
  security: GetTransferSecurity;
}


export class GetTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transfer?: shared.Transfer;
}
