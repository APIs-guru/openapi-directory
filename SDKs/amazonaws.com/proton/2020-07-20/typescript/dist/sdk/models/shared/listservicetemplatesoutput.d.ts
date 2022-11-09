import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplateSummary } from "./servicetemplatesummary";
export declare class ListServiceTemplatesOutput extends SpeakeasyBase {
    nextToken?: string;
    templates: ServiceTemplateSummary[];
}
