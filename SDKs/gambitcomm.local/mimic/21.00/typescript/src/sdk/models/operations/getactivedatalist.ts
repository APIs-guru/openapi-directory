import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActiveDataListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getActiveDataList200ApplicationJsonInt32Integers?: number[];
}
