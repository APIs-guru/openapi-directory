import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about where human output will be stored.
**/
export declare class FlowDefinitionOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3OutputPath: string;
}
