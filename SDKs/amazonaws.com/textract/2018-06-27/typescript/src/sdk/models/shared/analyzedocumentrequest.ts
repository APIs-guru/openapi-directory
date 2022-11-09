import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
import { FeatureTypeEnum } from "./featuretypeenum";
import { HumanLoopConfig } from "./humanloopconfig";


export class AnalyzeDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document: Document;

  @Metadata({ data: "json, name=FeatureTypes" })
  featureTypes: FeatureTypeEnum[];

  @Metadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig?: HumanLoopConfig;
}
