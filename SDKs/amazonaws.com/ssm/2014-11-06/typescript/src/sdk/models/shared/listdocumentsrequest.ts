import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentFilter } from "./documentfilter";
import { DocumentKeyValuesFilter } from "./documentkeyvaluesfilter";


export class ListDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentFilterList", elemType: shared.DocumentFilter })
  documentFilterList?: DocumentFilter[];

  @Metadata({ data: "json, name=Filters", elemType: shared.DocumentKeyValuesFilter })
  filters?: DocumentKeyValuesFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
