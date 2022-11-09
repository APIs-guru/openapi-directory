import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetNetdevResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setNetdev200ApplicationJsonObject?: Map<string, number>;
}
