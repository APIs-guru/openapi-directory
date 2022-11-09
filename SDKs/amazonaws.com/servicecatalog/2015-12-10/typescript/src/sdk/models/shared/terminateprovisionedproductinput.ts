import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateProvisionedProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IgnoreErrors" })
  ignoreErrors?: boolean;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @Metadata({ data: "json, name=RetainPhysicalResources" })
  retainPhysicalResources?: boolean;

  @Metadata({ data: "json, name=TerminateToken" })
  terminateToken: string;
}
