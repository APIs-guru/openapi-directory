import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentTemplateSummary } from "./environmenttemplatesummary";
export declare class ListEnvironmentTemplatesOutput extends SpeakeasyBase {
    nextToken?: string;
    templates: EnvironmentTemplateSummary[];
}
