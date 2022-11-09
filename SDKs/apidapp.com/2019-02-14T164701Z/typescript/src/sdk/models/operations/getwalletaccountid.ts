import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWalletAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWalletAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWalletAccountIdPathParams;
}


export class GetWalletAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
