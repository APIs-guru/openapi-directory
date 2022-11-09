import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";


export class DescribeProjectOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=ProjectId" })
  projectId: string;

  @Metadata({ data: "json, name=ProjectName" })
  projectName: string;

  @Metadata({ data: "json, name=ProjectStatus" })
  projectStatus: ProjectStatusEnum;

  @Metadata({ data: "json, name=ServiceCatalogProvisionedProductDetails" })
  serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  @Metadata({ data: "json, name=ServiceCatalogProvisioningDetails" })
  serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
}
