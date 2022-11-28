import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningParameter } from "./provisioningparameter";
/**
 * Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
**/
export declare class ServiceCatalogProvisioningDetails extends SpeakeasyBase {
    pathId?: string;
    productId: string;
    provisioningArtifactId: string;
    provisioningParameters?: ProvisioningParameter[];
}
