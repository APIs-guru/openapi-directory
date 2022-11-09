import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfiguredListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConfiguredList200ApplicationJsonInt32Integers?: number[];
}
