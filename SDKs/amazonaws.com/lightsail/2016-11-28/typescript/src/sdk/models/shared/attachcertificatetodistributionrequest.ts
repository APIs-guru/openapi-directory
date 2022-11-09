import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachCertificateToDistributionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName: string;

  @Metadata({ data: "json, name=distributionName" })
  distributionName: string;
}
