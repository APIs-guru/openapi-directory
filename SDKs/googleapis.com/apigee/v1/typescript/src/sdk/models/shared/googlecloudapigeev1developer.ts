import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";


export class GoogleCloudApigeeV1Developer extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessType" })
  accessType?: string;

  @Metadata({ data: "json, name=appFamily" })
  appFamily?: string;

  @Metadata({ data: "json, name=apps" })
  apps?: string[];

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=companies" })
  companies?: string[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=developerId" })
  developerId?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
