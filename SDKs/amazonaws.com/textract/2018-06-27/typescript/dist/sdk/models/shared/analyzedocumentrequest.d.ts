import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { FeatureTypeEnum } from "./featuretypeenum";
import { HumanLoopConfig } from "./humanloopconfig";
export declare class AnalyzeDocumentRequest extends SpeakeasyBase {
    document: Document;
    featureTypes: FeatureTypeEnum[];
    humanLoopConfig?: HumanLoopConfig;
}
