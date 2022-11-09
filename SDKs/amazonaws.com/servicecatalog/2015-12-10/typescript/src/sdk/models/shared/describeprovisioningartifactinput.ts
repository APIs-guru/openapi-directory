import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProvisioningArtifactInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @Metadata({ data: "json, name=Verbose" })
  verbose?: boolean;
}
