import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3Tag } from "./s3tag";


// TagStepDetails
/** 
 * <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
**/
export class TagStepDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.S3Tag })
  tags?: S3Tag[];
}
