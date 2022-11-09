import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsBlockchainIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockchainIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsBlockchainIdPathParams;
}


export class OptionsBlockchainIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
