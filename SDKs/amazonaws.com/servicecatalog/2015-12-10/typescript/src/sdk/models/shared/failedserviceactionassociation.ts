import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionAssociationErrorCodeEnum } from "./serviceactionassociationerrorcodeenum";


// FailedServiceActionAssociation
/** 
 * An object containing information about the error, along with identifying information about the self-service action and its associations.
**/
export class FailedServiceActionAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: ServiceActionAssociationErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=ServiceActionId" })
  serviceActionId?: string;
}
