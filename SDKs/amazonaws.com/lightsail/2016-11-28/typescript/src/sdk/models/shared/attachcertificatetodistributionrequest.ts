import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachCertificateToDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName: string;

  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName: string;
}
