import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelatedFinding
/** 
 * Details about a related finding.
**/
export class RelatedFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ProductArn" })
  productArn: string;
}
