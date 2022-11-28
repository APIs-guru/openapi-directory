import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionAssociation } from "./serviceactionassociation";



export class BatchAssociateServiceActionWithProvisioningArtifactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionAssociations", elemType: ServiceActionAssociation })
  serviceActionAssociations: ServiceActionAssociation[];
}
