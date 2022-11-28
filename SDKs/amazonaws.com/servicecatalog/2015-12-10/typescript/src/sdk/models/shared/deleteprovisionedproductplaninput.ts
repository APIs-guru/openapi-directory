import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProvisionedProductPlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IgnoreErrors" })
  ignoreErrors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PlanId" })
  planId: string;
}
