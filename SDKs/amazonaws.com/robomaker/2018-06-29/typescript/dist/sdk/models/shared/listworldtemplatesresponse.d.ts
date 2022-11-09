import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateSummary } from "./templatesummary";
export declare class ListWorldTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templateSummaries?: TemplateSummary[];
}
