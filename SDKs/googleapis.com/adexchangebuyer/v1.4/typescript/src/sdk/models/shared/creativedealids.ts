import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreativeDealIdsDealStatuses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arcStatus" })
  arcStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: number;
}


// CreativeDealIds
/** 
 * The external deal ids associated with a creative.
**/
export class CreativeDealIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealStatuses", elemType: CreativeDealIdsDealStatuses })
  dealStatuses?: CreativeDealIdsDealStatuses[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
