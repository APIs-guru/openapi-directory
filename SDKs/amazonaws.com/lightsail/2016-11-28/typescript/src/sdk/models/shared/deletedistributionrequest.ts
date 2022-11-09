import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDistributionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
