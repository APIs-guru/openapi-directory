import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFailuresForLicenseConfigurationOperationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
