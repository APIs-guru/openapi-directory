import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
