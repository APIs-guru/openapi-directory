import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreSaveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeSave200ApplicationJsonObject?: Map<string, number>;
}
