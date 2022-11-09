import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExecuteProvisionedProductPlanInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=PlanId" })
  planId: string;
}
