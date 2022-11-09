import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCertificateRequestValidationTypeEnum } from "./sslcertificaterequestvalidationtypeenum";


export class SslCertificateRequestValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_validated" })
  autoValidated?: boolean;

  @Metadata({ data: "json, name=cname_validation_content" })
  cnameValidationContent?: string;

  @Metadata({ data: "json, name=cname_validation_name" })
  cnameValidationName?: string;

  @Metadata({ data: "json, name=dns_name" })
  dnsName?: string;

  @Metadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];

  @Metadata({ data: "json, name=file_validation_content" })
  fileValidationContent?: string[];

  @Metadata({ data: "json, name=file_validation_url_http" })
  fileValidationUrlHttp?: string;

  @Metadata({ data: "json, name=file_validation_url_https" })
  fileValidationUrlHttps?: string;

  @Metadata({ data: "json, name=type" })
  type?: SslCertificateRequestValidationTypeEnum;
}
