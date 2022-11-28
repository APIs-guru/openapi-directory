import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVersion200ApplicationJsonString?: string;
}
