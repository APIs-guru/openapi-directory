import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionAssociationErrorCodeEnum } from "./serviceactionassociationerrorcodeenum";
/**
 * An object containing information about the error, along with identifying information about the self-service action and its associations.
**/
export declare class FailedServiceActionAssociation extends SpeakeasyBase {
    errorCode?: ServiceActionAssociationErrorCodeEnum;
    errorMessage?: string;
    productId?: string;
    provisioningArtifactId?: string;
    serviceActionId?: string;
}
