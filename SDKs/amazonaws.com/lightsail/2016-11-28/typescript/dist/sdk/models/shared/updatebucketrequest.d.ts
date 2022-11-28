import { SpeakeasyBase } from "../../../internal/utils";
import { AccessRules } from "./accessrules";
export declare class UpdateBucketRequest extends SpeakeasyBase {
    accessRules?: AccessRules;
    bucketName: string;
    readonlyAccessAccounts?: string[];
    versioning?: string;
}
