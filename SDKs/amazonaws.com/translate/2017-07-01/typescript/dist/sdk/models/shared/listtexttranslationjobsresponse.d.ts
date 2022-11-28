import { SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";
export declare class ListTextTranslationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    textTranslationJobPropertiesList?: TextTranslationJobProperties[];
}
