import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateLogGroupRequest extends SpeakeasyBase {
    kmsKeyId?: string;
    logGroupName: string;
    tags?: Map<string, string>;
}
