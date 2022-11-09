import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProvisionedProductOutputsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=OutputKeys" })
  outputKeys?: string[];

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;
}
