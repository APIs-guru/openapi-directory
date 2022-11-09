import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeServiceActionExecutionParametersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @Metadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
