import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateProvisionedProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IgnoreErrors" })
  ignoreErrors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=RetainPhysicalResources" })
  retainPhysicalResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TerminateToken" })
  terminateToken: string;
}
