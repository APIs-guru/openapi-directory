import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a S3 tag
**/
export declare class S3TagCreateRequest extends SpeakeasyBase {
    isMandatory?: boolean;
    key: string;
    value: string;
}
