import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServiceActionExecutionParametersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
