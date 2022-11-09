import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProduct200ApplicationJsonObject?: Map<string, number>;
}
