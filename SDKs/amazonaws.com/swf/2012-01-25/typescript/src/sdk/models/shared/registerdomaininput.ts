import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";



export class RegisterDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ResourceTag })
  tags?: ResourceTag[];

  @SpeakeasyMetadata({ data: "json, name=workflowExecutionRetentionPeriodInDays" })
  workflowExecutionRetentionPeriodInDays: string;
}
