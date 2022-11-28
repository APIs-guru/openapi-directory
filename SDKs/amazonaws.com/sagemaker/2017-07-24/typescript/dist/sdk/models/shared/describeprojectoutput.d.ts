import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
export declare class DescribeProjectOutput extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime: Date;
    projectArn: string;
    projectDescription?: string;
    projectId: string;
    projectName: string;
    projectStatus: ProjectStatusEnum;
    serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
    serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
}
