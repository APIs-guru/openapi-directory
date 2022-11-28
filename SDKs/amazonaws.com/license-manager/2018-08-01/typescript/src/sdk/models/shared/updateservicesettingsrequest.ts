import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfiguration } from "./organizationconfiguration";



export class UpdateServiceSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableCrossAccountsDiscovery" })
  enableCrossAccountsDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfiguration" })
  organizationConfiguration?: OrganizationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=S3BucketArn" })
  s3BucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;
}
