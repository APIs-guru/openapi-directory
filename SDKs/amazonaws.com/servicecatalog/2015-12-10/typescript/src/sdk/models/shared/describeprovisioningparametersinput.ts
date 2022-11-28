import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProvisioningParametersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=PathName" })
  pathName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;
}
