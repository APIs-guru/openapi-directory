import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1Credential } from "./googlecloudapigeev1credential";



export class GoogleCloudApigeeV1DeveloperApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProducts" })
  apiProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: GoogleCloudApigeeV1Credential })
  credentials?: GoogleCloudApigeeV1Credential[];

  @SpeakeasyMetadata({ data: "json, name=developerId" })
  developerId?: string;

  @SpeakeasyMetadata({ data: "json, name=keyExpiresIn" })
  keyExpiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GoogleCloudApigeeV1DeveloperAppInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProducts" })
  apiProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=developerId" })
  developerId?: string;

  @SpeakeasyMetadata({ data: "json, name=keyExpiresIn" })
  keyExpiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
