import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanaryCodeOutput
/** 
 * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
**/
export class CanaryCodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=SourceLocationArn" })
  sourceLocationArn?: string;
}
