import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainStatusEnum } from "./domainstatusenum";


export class DescribeDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcmCertificateArn" })
  acmCertificateArn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=DomainStatus" })
  domainStatus?: DomainStatusEnum;
}
