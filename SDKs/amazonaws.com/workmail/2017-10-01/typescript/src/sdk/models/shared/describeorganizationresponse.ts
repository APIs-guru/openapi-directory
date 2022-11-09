import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Alias" })
  alias?: string;

  @Metadata({ data: "json, name=CompletedDate" })
  completedDate?: Date;

  @Metadata({ data: "json, name=DefaultMailDomain" })
  defaultMailDomain?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=DirectoryType" })
  directoryType?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
