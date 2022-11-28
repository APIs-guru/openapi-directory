import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetdevResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetdev200ApplicationJsonObject?: Map<string, number>;
}
