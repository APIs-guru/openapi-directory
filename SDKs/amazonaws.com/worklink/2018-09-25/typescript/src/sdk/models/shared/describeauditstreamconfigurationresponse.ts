import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAuditStreamConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditStreamArn" })
  auditStreamArn?: string;
}
