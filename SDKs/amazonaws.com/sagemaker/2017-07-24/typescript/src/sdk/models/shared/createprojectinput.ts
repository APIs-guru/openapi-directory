import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";



export class CreateProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCatalogProvisioningDetails" })
  serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
