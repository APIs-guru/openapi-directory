import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceActionAssociation } from "./serviceactionassociation";


export class BatchAssociateServiceActionWithProvisioningArtifactInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=ServiceActionAssociations", elemType: shared.ServiceActionAssociation })
  serviceActionAssociations: ServiceActionAssociation[];
}
