import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3ResourceClassification } from "./s3resourceclassification";


export class ListS3ResourcesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=s3Resources", elemType: shared.S3ResourceClassification })
  s3Resources?: S3ResourceClassification[];
}
