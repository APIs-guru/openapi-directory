import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTag } from "./resourcetag";


export class RegisterDomainInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags", elemType: shared.ResourceTag })
  tags?: ResourceTag[];

  @Metadata({ data: "json, name=workflowExecutionRetentionPeriodInDays" })
  workflowExecutionRetentionPeriodInDays: string;
}
