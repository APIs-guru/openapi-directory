import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmImage } from "./algorithmimage";
import { DefaultHyperParameterRanges } from "./defaulthyperparameterranges";


// Algorithm
/** 
 * Describes a custom algorithm.
**/
export class Algorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=algorithmImage" })
  algorithmImage?: AlgorithmImage;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=defaultHyperParameterRanges" })
  defaultHyperParameterRanges?: DefaultHyperParameterRanges;

  @Metadata({ data: "json, name=defaultHyperParameters" })
  defaultHyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=defaultResourceConfig" })
  defaultResourceConfig?: Map<string, string>;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=trainingInputMode" })
  trainingInputMode?: string;
}
