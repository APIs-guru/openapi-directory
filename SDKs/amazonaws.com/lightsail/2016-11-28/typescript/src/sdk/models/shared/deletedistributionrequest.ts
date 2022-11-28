import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
