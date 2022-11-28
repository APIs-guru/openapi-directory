import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
