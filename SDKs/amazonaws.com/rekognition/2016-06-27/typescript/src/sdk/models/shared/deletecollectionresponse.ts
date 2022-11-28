import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
