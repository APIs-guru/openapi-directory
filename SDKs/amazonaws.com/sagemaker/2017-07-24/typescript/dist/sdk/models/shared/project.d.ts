import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";
/**
 * The properties of a project as returned by the Search API.
**/
export declare class Project extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    projectArn?: string;
    projectDescription?: string;
    projectId?: string;
    projectName?: string;
    projectStatus?: ProjectStatusEnum;
    serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
    serviceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;
    tags?: Tag[];
}
