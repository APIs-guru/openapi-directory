import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmImage } from "./algorithmimage";
import { DefaultHyperParameterRanges } from "./defaulthyperparameterranges";



// Algorithm
/** 
 * Describes a custom algorithm.
**/
export class Algorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=algorithmImage" })
  algorithmImage?: AlgorithmImage;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultHyperParameterRanges" })
  defaultHyperParameterRanges?: DefaultHyperParameterRanges;

  @SpeakeasyMetadata({ data: "json, name=defaultHyperParameters" })
  defaultHyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=defaultResourceConfig" })
  defaultResourceConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingInputMode" })
  trainingInputMode?: string;
}
