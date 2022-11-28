import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionAssociationErrorCodeEnum } from "./serviceactionassociationerrorcodeenum";



// FailedServiceActionAssociation
/** 
 * An object containing information about the error, along with identifying information about the self-service action and its associations.
**/
export class FailedServiceActionAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: ServiceActionAssociationErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId?: string;
}
