import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedServiceActionAssociation } from "./failedserviceactionassociation";



export class BatchAssociateServiceActionWithProvisioningArtifactOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedServiceActionAssociations", elemType: FailedServiceActionAssociation })
  failedServiceActionAssociations?: FailedServiceActionAssociation[];
}
