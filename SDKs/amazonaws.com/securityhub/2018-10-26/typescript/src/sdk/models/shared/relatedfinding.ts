import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelatedFinding
/** 
 * Details about a related finding.
**/
export class RelatedFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=ProductArn" })
  productArn: string;
}
