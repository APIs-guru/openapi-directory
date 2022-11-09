import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Credential } from "./googlecloudapigeev1credential";


export class GoogleCloudApigeeV1DeveloperApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProducts" })
  apiProducts?: string[];

  @Metadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=credentials", elemType: shared.GoogleCloudApigeeV1Credential })
  credentials?: GoogleCloudApigeeV1Credential[];

  @Metadata({ data: "json, name=developerId" })
  developerId?: string;

  @Metadata({ data: "json, name=keyExpiresIn" })
  keyExpiresIn?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
