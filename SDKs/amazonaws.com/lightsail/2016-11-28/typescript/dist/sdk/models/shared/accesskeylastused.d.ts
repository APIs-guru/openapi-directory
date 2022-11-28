import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p> </note>
**/
export declare class AccessKeyLastUsed extends SpeakeasyBase {
    lastUsedDate?: Date;
    region?: string;
    serviceName?: string;
}
