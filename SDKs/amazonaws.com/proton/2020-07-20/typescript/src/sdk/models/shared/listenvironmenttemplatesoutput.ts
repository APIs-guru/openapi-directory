import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentTemplateSummary } from "./environmenttemplatesummary";


export class ListEnvironmentTemplatesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templates", elemType: shared.EnvironmentTemplateSummary })
  templates: EnvironmentTemplateSummary[];
}
