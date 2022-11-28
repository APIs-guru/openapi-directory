import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangedConfigListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChangedConfigList200ApplicationJsonInt32Integers?: number[];
}
