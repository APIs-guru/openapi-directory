import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListLicenseVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
