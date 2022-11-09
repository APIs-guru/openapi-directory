import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentTemplateVersionSummary } from "./environmenttemplateversionsummary";


export class ListEnvironmentTemplateVersionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templateVersions", elemType: shared.EnvironmentTemplateVersionSummary })
  templateVersions: EnvironmentTemplateVersionSummary[];
}
