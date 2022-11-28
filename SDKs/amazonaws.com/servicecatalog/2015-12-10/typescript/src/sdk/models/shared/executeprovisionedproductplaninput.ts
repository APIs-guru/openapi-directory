import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecuteProvisionedProductPlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=PlanId" })
  planId: string;
}
