import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { FeatureTypeEnum } from "./featuretypeenum";
import { HumanLoopConfig } from "./humanloopconfig";



export class AnalyzeDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document: Document;

  @SpeakeasyMetadata({ data: "json, name=FeatureTypes" })
  featureTypes: FeatureTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig?: HumanLoopConfig;
}
