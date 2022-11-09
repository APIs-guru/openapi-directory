import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeList200ApplicationJsonStrings?: string[];
}
