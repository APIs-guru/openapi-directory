import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
**/
export declare class ServiceActionAssociation extends SpeakeasyBase {
    productId: string;
    provisioningArtifactId: string;
    serviceActionId: string;
}
