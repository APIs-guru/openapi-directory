import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
