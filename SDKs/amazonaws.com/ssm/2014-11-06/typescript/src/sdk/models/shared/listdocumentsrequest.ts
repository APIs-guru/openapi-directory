import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentFilter } from "./documentfilter";
import { DocumentKeyValuesFilter } from "./documentkeyvaluesfilter";



export class ListDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentFilterList", elemType: DocumentFilter })
  documentFilterList?: DocumentFilter[];

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: DocumentKeyValuesFilter })
  filters?: DocumentKeyValuesFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
