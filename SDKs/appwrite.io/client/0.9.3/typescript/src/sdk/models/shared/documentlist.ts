import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentList
/** 
 * Documents List
**/
export class DocumentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
