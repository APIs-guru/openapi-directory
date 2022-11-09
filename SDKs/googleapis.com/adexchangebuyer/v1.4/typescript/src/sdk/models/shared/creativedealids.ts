import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreativeDealIdsDealStatuses extends SpeakeasyBase {
  @Metadata({ data: "json, name=arcStatus" })
  arcStatus?: string;

  @Metadata({ data: "json, name=dealId" })
  dealId?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: number;
}


// CreativeDealIds
/** 
 * The external deal ids associated with a creative.
**/
export class CreativeDealIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealStatuses", elemType: shared.CreativeDealIdsDealStatuses })
  dealStatuses?: CreativeDealIdsDealStatuses[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
