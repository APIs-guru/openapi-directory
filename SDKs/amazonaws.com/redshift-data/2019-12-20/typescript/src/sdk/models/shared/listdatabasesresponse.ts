import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Databases" })
  databases?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
