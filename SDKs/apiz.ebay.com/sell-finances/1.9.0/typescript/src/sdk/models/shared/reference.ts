import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reference
/** 
 * This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
**/
export class Reference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
