import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionAssociation } from "./serviceactionassociation";
export declare class BatchAssociateServiceActionWithProvisioningArtifactInput extends SpeakeasyBase {
    acceptLanguage?: string;
    serviceActionAssociations: ServiceActionAssociation[];
}
