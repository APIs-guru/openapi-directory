import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}
