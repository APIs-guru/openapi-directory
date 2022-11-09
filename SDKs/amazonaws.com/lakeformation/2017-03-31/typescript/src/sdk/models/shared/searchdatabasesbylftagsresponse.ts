import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaggedDatabase } from "./taggeddatabase";


export class SearchDatabasesByLfTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseList", elemType: shared.TaggedDatabase })
  databaseList?: TaggedDatabase[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
