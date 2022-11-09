import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartMailboxExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @Metadata({ data: "json, name=S3Prefix" })
  s3Prefix: string;
}
