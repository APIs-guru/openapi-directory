import { SpeakeasyBase } from "../../../internal/utils";
import { S3ResourceClassificationUpdate } from "./s3resourceclassificationupdate";
export declare class UpdateS3ResourcesRequest extends SpeakeasyBase {
    memberAccountId?: string;
    s3ResourcesUpdate: S3ResourceClassificationUpdate[];
}
