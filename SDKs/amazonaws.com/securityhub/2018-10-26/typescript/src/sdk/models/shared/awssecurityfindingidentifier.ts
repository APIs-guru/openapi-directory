import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsSecurityFindingIdentifier
/** 
 * Identifies a finding to update using <code>BatchUpdateFindings</code>.
**/
export class AwsSecurityFindingIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=ProductArn" })
  productArn: string;
}
