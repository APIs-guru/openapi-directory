import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionTypeEnum } from "./retentiontypeenum";
/**
 * The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
**/
export declare class RetentionPolicy extends SpeakeasyBase {
    homeEfsFileSystem?: RetentionTypeEnum;
}
