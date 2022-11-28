import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateVersionSummary } from "./environmenttemplateversionsummary";



export class ListEnvironmentTemplateVersionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templateVersions", elemType: EnvironmentTemplateVersionSummary })
  templateVersions: EnvironmentTemplateVersionSummary[];
}
