import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";


export class CreateProjectInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=ProjectName" })
  projectName: string;

  @Metadata({ data: "json, name=ServiceCatalogProvisioningDetails" })
  serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
