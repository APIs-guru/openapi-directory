import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExecuteProvisionedProductServiceActionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=ExecuteToken" })
  executeToken: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @Metadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
