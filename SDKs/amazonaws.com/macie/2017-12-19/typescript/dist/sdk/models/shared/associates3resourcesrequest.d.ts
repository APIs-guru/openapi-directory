import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ResourceClassification } from "./s3resourceclassification";
export declare class AssociateS3ResourcesRequest extends SpeakeasyBase {
    memberAccountId?: string;
    s3Resources: S3ResourceClassification[];
}
