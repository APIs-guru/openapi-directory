import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;
}
