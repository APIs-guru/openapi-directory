import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
