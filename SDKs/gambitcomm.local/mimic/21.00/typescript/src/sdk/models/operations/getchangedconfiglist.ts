import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangedConfigListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChangedConfigList200ApplicationJsonInt32Integers?: number[];
}
