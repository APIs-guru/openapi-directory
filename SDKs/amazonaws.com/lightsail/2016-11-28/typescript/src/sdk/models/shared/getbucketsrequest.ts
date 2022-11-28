import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBucketsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=includeConnectedResources" })
  includeConnectedResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
