import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3Resource } from "./s3resource";


export class DisassociateS3ResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedS3Resources", elemType: shared.S3Resource })
  associatedS3Resources: S3Resource[];

  @Metadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;
}
