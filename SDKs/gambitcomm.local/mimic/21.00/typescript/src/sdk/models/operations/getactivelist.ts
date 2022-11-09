import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActiveListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getActiveList200ApplicationJsonInt32Integers?: number[];
}
