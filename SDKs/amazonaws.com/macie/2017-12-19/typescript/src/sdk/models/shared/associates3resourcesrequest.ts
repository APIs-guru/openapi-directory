import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3ResourceClassification } from "./s3resourceclassification";


export class AssociateS3ResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @Metadata({ data: "json, name=s3Resources", elemType: shared.S3ResourceClassification })
  s3Resources: S3ResourceClassification[];
}
