import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationConfiguration } from "./organizationconfiguration";


export class UpdateServiceSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableCrossAccountsDiscovery" })
  enableCrossAccountsDiscovery?: boolean;

  @Metadata({ data: "json, name=OrganizationConfiguration" })
  organizationConfiguration?: OrganizationConfiguration;

  @Metadata({ data: "json, name=S3BucketArn" })
  s3BucketArn?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;
}
