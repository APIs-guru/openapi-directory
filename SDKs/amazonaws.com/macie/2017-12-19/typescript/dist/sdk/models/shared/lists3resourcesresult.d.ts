import { SpeakeasyBase } from "../../../internal/utils";
import { S3ResourceClassification } from "./s3resourceclassification";
export declare class ListS3ResourcesResult extends SpeakeasyBase {
    nextToken?: string;
    s3Resources?: S3ResourceClassification[];
}
