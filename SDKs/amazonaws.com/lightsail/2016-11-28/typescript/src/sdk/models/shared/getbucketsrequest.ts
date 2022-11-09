import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBucketsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=includeConnectedResources" })
  includeConnectedResources?: boolean;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
