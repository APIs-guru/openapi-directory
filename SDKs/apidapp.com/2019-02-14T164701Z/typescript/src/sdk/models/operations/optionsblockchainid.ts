import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsBlockchainIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockchainIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsBlockchainIdPathParams;
}


export class OptionsBlockchainIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
