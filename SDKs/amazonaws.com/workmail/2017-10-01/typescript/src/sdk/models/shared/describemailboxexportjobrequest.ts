import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeMailboxExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
