import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreativeDealAssociation
/** 
 * The association between a creative and a deal.
**/
export class CreativeDealAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealsId" })
  dealsId?: string;
}
