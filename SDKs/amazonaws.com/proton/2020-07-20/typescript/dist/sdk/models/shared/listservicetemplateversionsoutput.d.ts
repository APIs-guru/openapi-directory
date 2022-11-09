import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplateVersionSummary } from "./servicetemplateversionsummary";
export declare class ListServiceTemplateVersionsOutput extends SpeakeasyBase {
    nextToken?: string;
    templateVersions: ServiceTemplateVersionSummary[];
}
