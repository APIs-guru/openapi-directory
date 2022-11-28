import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Resource } from "./s3resource";



export class DisassociateS3ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedS3Resources", elemType: S3Resource })
  associatedS3Resources: S3Resource[];

  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;
}
