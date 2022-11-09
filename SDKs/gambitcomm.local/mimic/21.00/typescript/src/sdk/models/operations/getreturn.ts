import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReturnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getReturn200ApplicationJsonObject?: Map<string, number>;
}
