import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";



// Project
/** 
 * The properties of a project as returned by the Search API.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectStatus" })
  projectStatus?: ProjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceCatalogProvisionedProductDetails" })
  serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  @SpeakeasyMetadata({ data: "json, name=ServiceCatalogProvisioningDetails" })
  serviceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
