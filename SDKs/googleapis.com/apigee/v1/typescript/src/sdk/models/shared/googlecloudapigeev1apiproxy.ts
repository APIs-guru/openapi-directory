import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EntityMetadata } from "./googlecloudapigeev1entitymetadata";


export enum GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum {
    ApiProxyTypeUnspecified = "API_PROXY_TYPE_UNSPECIFIED",
    Programmable = "PROGRAMMABLE",
    Configurable = "CONFIGURABLE"
}


// GoogleCloudApigeeV1ApiProxy
/** 
 * Metadata describing the API proxy
**/
export class GoogleCloudApigeeV1ApiProxy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProxyType" })
  apiProxyType?: GoogleCloudApigeeV1ApiProxyApiProxyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=latestRevisionId" })
  latestRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=metaData" })
  metaData?: GoogleCloudApigeeV1EntityMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string[];
}
