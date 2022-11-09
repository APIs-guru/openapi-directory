import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetdevResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetdev200ApplicationJsonObject?: Map<string, number>;
}
