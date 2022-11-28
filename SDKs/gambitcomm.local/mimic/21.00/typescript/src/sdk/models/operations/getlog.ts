import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLog200ApplicationJsonObject?: Map<string, number>;
}
