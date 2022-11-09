import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDistributionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionName" })
  distributionName?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
