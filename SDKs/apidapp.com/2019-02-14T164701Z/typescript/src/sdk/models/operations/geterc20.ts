import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetErc20Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
