import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";



export class GoogleCloudApigeeV1Developer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: string;

  @SpeakeasyMetadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=apps" })
  apps?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=companies" })
  companies?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=developerId" })
  developerId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class GoogleCloudApigeeV1DeveloperInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: string;

  @SpeakeasyMetadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=apps" })
  apps?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=companies" })
  companies?: string[];

  @SpeakeasyMetadata({ data: "json, name=developerId" })
  developerId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
