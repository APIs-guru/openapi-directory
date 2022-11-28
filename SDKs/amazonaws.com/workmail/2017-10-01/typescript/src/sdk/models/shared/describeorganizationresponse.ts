import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedDate" })
  completedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultMailDomain" })
  defaultMailDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryType" })
  directoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
