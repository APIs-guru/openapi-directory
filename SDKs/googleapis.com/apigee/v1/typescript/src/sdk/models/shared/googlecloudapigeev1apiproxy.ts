import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1EntityMetadata } from "./googlecloudapigeev1entitymetadata";

export enum GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum {
    ApiProxyTypeUnspecified = "API_PROXY_TYPE_UNSPECIFIED"
,    Programmable = "PROGRAMMABLE"
,    Configurable = "CONFIGURABLE"
}


// GoogleCloudApigeeV1ApiProxy
/** 
 * Metadata describing the API proxy
**/
export class GoogleCloudApigeeV1ApiProxy extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProxyType" })
  apiProxyType?: GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=latestRevisionId" })
  latestRevisionId?: string;

  @Metadata({ data: "json, name=metaData" })
  metaData?: GoogleCloudApigeeV1EntityMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=revision" })
  revision?: string[];
}
