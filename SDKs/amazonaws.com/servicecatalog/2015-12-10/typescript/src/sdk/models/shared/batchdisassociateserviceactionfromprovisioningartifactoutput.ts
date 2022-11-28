import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedServiceActionAssociation } from "./failedserviceactionassociation";



export class BatchDisassociateServiceActionFromProvisioningArtifactOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedServiceActionAssociations", elemType: FailedServiceActionAssociation })
  failedServiceActionAssociations?: FailedServiceActionAssociation[];
}
