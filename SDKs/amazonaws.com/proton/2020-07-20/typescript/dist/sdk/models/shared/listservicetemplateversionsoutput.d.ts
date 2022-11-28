import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateVersionSummary } from "./servicetemplateversionsummary";
export declare class ListServiceTemplateVersionsOutput extends SpeakeasyBase {
    nextToken?: string;
    templateVersions: ServiceTemplateVersionSummary[];
}
