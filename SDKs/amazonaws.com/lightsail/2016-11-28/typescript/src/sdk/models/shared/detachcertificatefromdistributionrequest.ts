import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachCertificateFromDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName: string;
}
