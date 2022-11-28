import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateLfTagRequest extends SpeakeasyBase {
    catalogId?: string;
    tagKey: string;
    tagValuesToAdd?: string[];
    tagValuesToDelete?: string[];
}
