import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed instances, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
