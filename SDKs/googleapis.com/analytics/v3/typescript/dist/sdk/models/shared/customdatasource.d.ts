import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomDataSourceChildLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
**/
export declare class CustomDataSourceParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * JSON template for an Analytics custom data source.
**/
export declare class CustomDataSource extends SpeakeasyBase {
    accountId?: string;
    childLink?: CustomDataSourceChildLink;
    created?: Date;
    description?: string;
    id?: string;
    importBehavior?: string;
    kind?: string;
    name?: string;
    parentLink?: CustomDataSourceParentLink;
    profilesLinked?: string[];
    schema?: string[];
    selfLink?: string;
    type?: string;
    updated?: Date;
    uploadType?: string;
    webPropertyId?: string;
}
