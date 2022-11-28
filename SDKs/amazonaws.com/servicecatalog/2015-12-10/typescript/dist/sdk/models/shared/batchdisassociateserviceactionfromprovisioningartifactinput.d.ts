import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionAssociation } from "./serviceactionassociation";
export declare class BatchDisassociateServiceActionFromProvisioningArtifactInput extends SpeakeasyBase {
    acceptLanguage?: string;
    serviceActionAssociations: ServiceActionAssociation[];
}
