import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecuteProvisionedProductServiceActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecuteToken" })
  executeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
