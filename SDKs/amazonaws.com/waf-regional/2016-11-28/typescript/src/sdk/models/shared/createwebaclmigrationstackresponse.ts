import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebAclMigrationStackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ObjectUrl" })
  s3ObjectUrl: string;
}
