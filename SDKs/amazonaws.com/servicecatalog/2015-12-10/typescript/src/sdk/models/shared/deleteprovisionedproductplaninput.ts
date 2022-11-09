import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProvisionedProductPlanInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IgnoreErrors" })
  ignoreErrors?: boolean;

  @Metadata({ data: "json, name=PlanId" })
  planId: string;
}
