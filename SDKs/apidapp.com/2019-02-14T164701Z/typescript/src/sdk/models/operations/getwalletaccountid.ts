import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWalletAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWalletAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWalletAccountIdPathParams;
}


export class GetWalletAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
