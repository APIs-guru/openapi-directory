import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for the custom metric. Points to the property to which the custom metric belongs.
**/
export declare class CustomMetricParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * JSON template for Analytics Custom Metric.
**/
export declare class CustomMetric extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    created?: Date;
    id?: string;
    index?: number;
    kind?: string;
    maxValue?: string;
    minValue?: string;
    name?: string;
    parentLink?: CustomMetricParentLink;
    scope?: string;
    selfLink?: string;
    type?: string;
    updated?: Date;
    webPropertyId?: string;
}
/**
 * JSON template for Analytics Custom Metric.
**/
export declare class CustomMetricInput extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    id?: string;
    maxValue?: string;
    minValue?: string;
    name?: string;
    parentLink?: CustomMetricParentLink;
    scope?: string;
    type?: string;
    webPropertyId?: string;
}
