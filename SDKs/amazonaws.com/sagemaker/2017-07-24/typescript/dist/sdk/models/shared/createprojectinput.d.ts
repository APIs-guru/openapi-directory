import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";
export declare class CreateProjectInput extends SpeakeasyBase {
    projectDescription?: string;
    projectName: string;
    serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
    tags?: Tag[];
}
