import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsWalletAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsWalletAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsWalletAccountIdPathParams;
}


export class OptionsWalletAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
