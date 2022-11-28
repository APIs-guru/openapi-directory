import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateFilter } from "./environmenttemplatefilter";
export declare class ListEnvironmentsInput extends SpeakeasyBase {
    environmentTemplates?: EnvironmentTemplateFilter[];
    maxResults?: number;
    nextToken?: string;
}
