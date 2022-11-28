import { SpeakeasyBase } from "../../../internal/utils";
import { S3Tag } from "./s3tag";
/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
**/
export declare class TagStepDetails extends SpeakeasyBase {
    name?: string;
    tags?: S3Tag[];
}
