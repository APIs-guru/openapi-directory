import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentTemplateFilter } from "./environmenttemplatefilter";


export class ListEnvironmentsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentTemplates", elemType: shared.EnvironmentTemplateFilter })
  environmentTemplates?: EnvironmentTemplateFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
