import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBulkMessageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
