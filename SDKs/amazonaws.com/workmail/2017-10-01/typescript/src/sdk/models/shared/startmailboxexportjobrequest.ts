import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMailboxExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=S3Prefix" })
  s3Prefix: string;
}
