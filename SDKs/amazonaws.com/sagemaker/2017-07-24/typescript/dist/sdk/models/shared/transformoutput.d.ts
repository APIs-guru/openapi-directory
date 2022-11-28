import { SpeakeasyBase } from "../../../internal/utils";
import { AssemblyTypeEnum } from "./assemblytypeenum";
/**
 * Describes the results of a transform job.
**/
export declare class TransformOutput extends SpeakeasyBase {
    accept?: string;
    assembleWith?: AssemblyTypeEnum;
    kmsKeyId?: string;
    s3OutputPath: string;
}
