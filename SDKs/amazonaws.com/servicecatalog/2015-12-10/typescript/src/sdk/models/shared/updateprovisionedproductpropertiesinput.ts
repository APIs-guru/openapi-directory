import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateProvisionedProductPropertiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductProperties" })
  provisionedProductProperties: Map<string, string>;
}
