import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelArtifacts
/** 
 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that describes how to compute inferences, and other metadata.</p>
**/
export class ModelArtifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ModelArtifacts" })
  s3ModelArtifacts: string;
}
