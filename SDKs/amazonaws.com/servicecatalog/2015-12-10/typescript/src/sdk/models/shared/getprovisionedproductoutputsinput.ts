import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProvisionedProductOutputsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputKeys" })
  outputKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;
}
