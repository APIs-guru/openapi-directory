import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest
/** 
 * Request for acknowledging the violation Next Id: 4
**/
export class GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantOrgPolicy" })
  nonCompliantOrgPolicy?: string;
}
