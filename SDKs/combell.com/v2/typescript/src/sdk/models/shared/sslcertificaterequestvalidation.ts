import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateRequestValidationTypeEnum } from "./sslcertificaterequestvalidationtypeenum";



export class SslCertificateRequestValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_validated" })
  autoValidated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cname_validation_content" })
  cnameValidationContent?: string;

  @SpeakeasyMetadata({ data: "json, name=cname_validation_name" })
  cnameValidationName?: string;

  @SpeakeasyMetadata({ data: "json, name=dns_name" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=file_validation_content" })
  fileValidationContent?: string[];

  @SpeakeasyMetadata({ data: "json, name=file_validation_url_http" })
  fileValidationUrlHttp?: string;

  @SpeakeasyMetadata({ data: "json, name=file_validation_url_https" })
  fileValidationUrlHttps?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SslCertificateRequestValidationTypeEnum;
}
