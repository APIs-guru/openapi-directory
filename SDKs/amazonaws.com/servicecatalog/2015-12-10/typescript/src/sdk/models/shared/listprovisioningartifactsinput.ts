import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListProvisioningArtifactsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;
}
