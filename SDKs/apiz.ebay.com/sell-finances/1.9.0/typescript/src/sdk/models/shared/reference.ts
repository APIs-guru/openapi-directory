import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Reference
/** 
 * This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
**/
export class Reference extends SpeakeasyBase {
  @Metadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
