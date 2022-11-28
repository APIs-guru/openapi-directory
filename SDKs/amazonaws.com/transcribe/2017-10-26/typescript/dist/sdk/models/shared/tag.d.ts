import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A key:value pair that adds metadata to a resource used by Amazon Transcribe. For example, a tag with the key:value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by your organization's sales department.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
