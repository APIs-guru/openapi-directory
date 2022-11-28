import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssemblyTypeEnum } from "./assemblytypeenum";



// TransformOutput
/** 
 * Describes the results of a transform job.
**/
export class TransformOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accept" })
  accept?: string;

  @SpeakeasyMetadata({ data: "json, name=AssembleWith" })
  assembleWith?: AssemblyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
