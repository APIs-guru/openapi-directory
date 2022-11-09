import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";


// GoogleCloudApigeeV1ApiProxyRevision
/** 
 * API proxy revision.
**/
export class GoogleCloudApigeeV1ApiProxyRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=archive" })
  archive?: string;

  @Metadata({ data: "json, name=basepaths" })
  basepaths?: string[];

  @Metadata({ data: "json, name=configurationVersion" })
  configurationVersion?: GoogleCloudApigeeV1ConfigVersion;

  @Metadata({ data: "json, name=contextInfo" })
  contextInfo?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityMetaDataAsProperties" })
  entityMetaDataAsProperties?: Map<string, string>;

  @Metadata({ data: "json, name=integrationEndpoints" })
  integrationEndpoints?: string[];

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policies" })
  policies?: string[];

  @Metadata({ data: "json, name=proxies" })
  proxies?: string[];

  @Metadata({ data: "json, name=proxyEndpoints" })
  proxyEndpoints?: string[];

  @Metadata({ data: "json, name=resourceFiles" })
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles;

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=sharedFlows" })
  sharedFlows?: string[];

  @Metadata({ data: "json, name=spec" })
  spec?: string;

  @Metadata({ data: "json, name=targetEndpoints" })
  targetEndpoints?: string[];

  @Metadata({ data: "json, name=targetServers" })
  targetServers?: string[];

  @Metadata({ data: "json, name=targets" })
  targets?: string[];

  @Metadata({ data: "json, name=teams" })
  teams?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
