import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAuditStreamConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditStreamArn" })
  auditStreamArn?: string;
}
