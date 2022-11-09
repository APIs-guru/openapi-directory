import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemTemplateFilter } from "./systemtemplatefilter";


export class SearchSystemTemplatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SystemTemplateFilter })
  filters?: SystemTemplateFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
