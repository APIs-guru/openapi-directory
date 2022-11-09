import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeSave200ApplicationJsonObject?: Map<string, number>;
}
