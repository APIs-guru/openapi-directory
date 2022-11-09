import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";


// GoogleCloudApigeeV1SharedFlowRevision
/** 
 * The metadata describing a shared flow revision.
**/
export class GoogleCloudApigeeV1SharedFlowRevision extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policies" })
  policies?: string[];

  @Metadata({ data: "json, name=resourceFiles" })
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles;

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=sharedFlows" })
  sharedFlows?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
