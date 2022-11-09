import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminate200ApplicationJsonObject?: Map<string, number>;
}
