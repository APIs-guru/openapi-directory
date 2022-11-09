import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionAssociation } from "./serviceactionassociation";
export declare class BatchDisassociateServiceActionFromProvisioningArtifactInput extends SpeakeasyBase {
    acceptLanguage?: string;
    serviceActionAssociations: ServiceActionAssociation[];
}
