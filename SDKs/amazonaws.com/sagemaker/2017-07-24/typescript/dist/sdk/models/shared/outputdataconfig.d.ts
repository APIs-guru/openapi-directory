import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about how to store model training results (model artifacts).
**/
export declare class OutputDataConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3OutputPath: string;
}
