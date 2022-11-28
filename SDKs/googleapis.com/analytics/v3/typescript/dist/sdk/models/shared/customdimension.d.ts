import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
**/
export declare class CustomDimensionParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * JSON template for Analytics Custom Dimension.
**/
export declare class CustomDimension extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    created?: Date;
    id?: string;
    index?: number;
    kind?: string;
    name?: string;
    parentLink?: CustomDimensionParentLink;
    scope?: string;
    selfLink?: string;
    updated?: Date;
    webPropertyId?: string;
}
/**
 * JSON template for Analytics Custom Dimension.
**/
export declare class CustomDimensionInput extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    id?: string;
    name?: string;
    parentLink?: CustomDimensionParentLink;
    scope?: string;
    webPropertyId?: string;
}
