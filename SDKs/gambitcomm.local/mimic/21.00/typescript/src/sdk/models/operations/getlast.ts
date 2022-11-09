import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLast200ApplicationJsonInt32Integer?: number;
}
