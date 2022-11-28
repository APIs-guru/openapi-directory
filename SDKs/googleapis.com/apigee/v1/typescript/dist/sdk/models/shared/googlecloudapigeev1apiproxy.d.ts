import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EntityMetadata } from "./googlecloudapigeev1entitymetadata";
export declare enum GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum {
    ApiProxyTypeUnspecified = "API_PROXY_TYPE_UNSPECIFIED",
    Programmable = "PROGRAMMABLE",
    Configurable = "CONFIGURABLE"
}
/**
 * Metadata describing the API proxy
**/
export declare class GoogleCloudApigeeV1ApiProxy extends SpeakeasyBase {
    apiProxyType?: GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum;
    labels?: Map<string, string>;
    latestRevisionId?: string;
    metaData?: GoogleCloudApigeeV1EntityMetadata;
    name?: string;
    readOnly?: boolean;
    revision?: string[];
}
