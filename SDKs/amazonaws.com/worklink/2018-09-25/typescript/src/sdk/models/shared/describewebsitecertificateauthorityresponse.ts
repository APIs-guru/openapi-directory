import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;
}
