import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSecurityFindingIdentifier
/** 
 * Identifies a finding to update using <code>BatchUpdateFindings</code>.
**/
export class AwsSecurityFindingIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ProductArn" })
  productArn: string;
}
