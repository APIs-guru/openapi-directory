import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociationsForLicenseConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
