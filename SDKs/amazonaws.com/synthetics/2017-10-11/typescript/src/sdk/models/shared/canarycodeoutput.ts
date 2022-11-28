import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanaryCodeOutput
/** 
 * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
**/
export class CanaryCodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceLocationArn" })
  sourceLocationArn?: string;
}
