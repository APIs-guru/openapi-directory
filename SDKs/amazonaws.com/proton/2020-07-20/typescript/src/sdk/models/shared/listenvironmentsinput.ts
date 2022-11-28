import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateFilter } from "./environmenttemplatefilter";



export class ListEnvironmentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentTemplates", elemType: EnvironmentTemplateFilter })
  environmentTemplates?: EnvironmentTemplateFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
