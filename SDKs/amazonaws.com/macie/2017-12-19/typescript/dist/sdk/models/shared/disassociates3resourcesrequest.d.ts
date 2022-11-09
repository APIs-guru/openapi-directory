import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Resource } from "./s3resource";
export declare class DisassociateS3ResourcesRequest extends SpeakeasyBase {
    associatedS3Resources: S3Resource[];
    memberAccountId?: string;
}
