import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDistributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
