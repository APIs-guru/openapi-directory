import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListLicenseVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
