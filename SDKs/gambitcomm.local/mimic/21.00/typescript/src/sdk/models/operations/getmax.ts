import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMax200ApplicationJsonInt32Integer?: number;
}
