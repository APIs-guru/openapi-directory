import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBulkMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
