import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateProvisionedProductPropertiesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @Metadata({ data: "json, name=ProvisionedProductProperties" })
  provisionedProductProperties: Map<string, string>;
}
