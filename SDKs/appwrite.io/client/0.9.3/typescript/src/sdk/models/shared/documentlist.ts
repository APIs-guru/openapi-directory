import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentList
/** 
 * Documents List
**/
export class DocumentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents: Map<string, any>[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
