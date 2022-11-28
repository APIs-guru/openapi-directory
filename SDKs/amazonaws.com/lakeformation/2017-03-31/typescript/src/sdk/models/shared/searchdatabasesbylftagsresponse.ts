import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggedDatabase } from "./taggeddatabase";



export class SearchDatabasesByLfTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseList", elemType: TaggedDatabase })
  databaseList?: TaggedDatabase[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
