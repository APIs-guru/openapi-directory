import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateFilter } from "./systemtemplatefilter";



export class SearchSystemTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: SystemTemplateFilter })
  filters?: SystemTemplateFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
