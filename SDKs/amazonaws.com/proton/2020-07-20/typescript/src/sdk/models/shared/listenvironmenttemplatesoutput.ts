import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateSummary } from "./environmenttemplatesummary";



export class ListEnvironmentTemplatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templates", elemType: EnvironmentTemplateSummary })
  templates: EnvironmentTemplateSummary[];
}
