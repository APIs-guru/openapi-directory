import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";



// GoogleCloudApigeeV1ApiProxyRevision
/** 
 * API proxy revision.
**/
export class GoogleCloudApigeeV1ApiProxyRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archive" })
  archive?: string;

  @SpeakeasyMetadata({ data: "json, name=basepaths" })
  basepaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=configurationVersion" })
  configurationVersion?: GoogleCloudApigeeV1ConfigVersion;

  @SpeakeasyMetadata({ data: "json, name=contextInfo" })
  contextInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityMetaDataAsProperties" })
  entityMetaDataAsProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=integrationEndpoints" })
  integrationEndpoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies?: string[];

  @SpeakeasyMetadata({ data: "json, name=proxies" })
  proxies?: string[];

  @SpeakeasyMetadata({ data: "json, name=proxyEndpoints" })
  proxyEndpoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceFiles" })
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=sharedFlows" })
  sharedFlows?: string[];

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: string;

  @SpeakeasyMetadata({ data: "json, name=targetEndpoints" })
  targetEndpoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetServers" })
  targetServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];

  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
