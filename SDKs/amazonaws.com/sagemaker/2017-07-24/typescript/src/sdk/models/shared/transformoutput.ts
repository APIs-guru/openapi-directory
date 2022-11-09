import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssemblyTypeEnum } from "./assemblytypeenum";


// TransformOutput
/** 
 * Describes the results of a transform job.
**/
export class TransformOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accept" })
  accept?: string;

  @Metadata({ data: "json, name=AssembleWith" })
  assembleWith?: AssemblyTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
