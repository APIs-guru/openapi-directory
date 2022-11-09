import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagPair } from "./lftagpair";
import { ColumnLfTag } from "./columnlftag";
import { LfTagPair } from "./lftagpair";
import { TableResource } from "./tableresource";


// TaggedTable
/** 
 * A structure describing a table resource with tags.
**/
export class TaggedTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=LFTagOnDatabase", elemType: shared.LfTagPair })
  lfTagOnDatabase?: LfTagPair[];

  @Metadata({ data: "json, name=LFTagsOnColumns", elemType: shared.ColumnLfTag })
  lfTagsOnColumns?: ColumnLfTag[];

  @Metadata({ data: "json, name=LFTagsOnTable", elemType: shared.LfTagPair })
  lfTagsOnTable?: LfTagPair[];

  @Metadata({ data: "json, name=Table" })
  table?: TableResource;
}
