import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A key:value pair associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
