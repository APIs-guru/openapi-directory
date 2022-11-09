import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowTemplateFilter } from "./flowtemplatefilter";


export class SearchFlowTemplatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.FlowTemplateFilter })
  filters?: FlowTemplateFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
