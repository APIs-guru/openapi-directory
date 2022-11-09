import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeMailboxExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
