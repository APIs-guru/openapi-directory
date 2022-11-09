import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreativeDealAssociation
/** 
 * The association between a creative and a deal.
**/
export class CreativeDealAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=dealsId" })
  dealsId?: string;
}
