import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbProcessorFeature
/** 
 * A processor feature.
**/
export class AwsRdsDbProcessorFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
