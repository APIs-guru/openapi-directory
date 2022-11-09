import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedServiceActionAssociation } from "./failedserviceactionassociation";


export class BatchDisassociateServiceActionFromProvisioningArtifactOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedServiceActionAssociations", elemType: shared.FailedServiceActionAssociation })
  failedServiceActionAssociations?: FailedServiceActionAssociation[];
}
