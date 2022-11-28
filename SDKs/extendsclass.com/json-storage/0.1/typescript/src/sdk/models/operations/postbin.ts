import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStatus?: any;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
