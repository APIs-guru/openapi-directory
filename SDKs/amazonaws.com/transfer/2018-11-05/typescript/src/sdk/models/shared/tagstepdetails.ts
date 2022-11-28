import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Tag } from "./s3tag";



// TagStepDetails
/** 
 * <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
**/
export class TagStepDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: S3Tag })
  tags?: S3Tag[];
}
