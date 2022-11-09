import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentTemplateVersionSummary } from "./environmenttemplateversionsummary";
export declare class ListEnvironmentTemplateVersionsOutput extends SpeakeasyBase {
    nextToken?: string;
    templateVersions: EnvironmentTemplateVersionSummary[];
}
