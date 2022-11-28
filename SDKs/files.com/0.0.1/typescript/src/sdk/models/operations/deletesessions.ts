import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
