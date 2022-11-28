import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeList200ApplicationJsonStrings?: string[];
}
