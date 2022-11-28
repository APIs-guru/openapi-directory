import { SpeakeasyBase } from "../../../internal/utils";
export declare class TranslateTextRequest extends SpeakeasyBase {
    sourceLanguageCode: string;
    targetLanguageCode: string;
    terminologyNames?: string[];
    text: string;
}
