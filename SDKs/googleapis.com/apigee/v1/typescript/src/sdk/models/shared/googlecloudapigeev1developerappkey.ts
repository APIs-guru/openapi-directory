import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";


export class GoogleCloudApigeeV1DeveloperAppKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProducts" })
  apiProducts?: any[];

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=consumerKey" })
  consumerKey?: string;

  @Metadata({ data: "json, name=consumerSecret" })
  consumerSecret?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @Metadata({ data: "json, name=expiresInSeconds" })
  expiresInSeconds?: string;

  @Metadata({ data: "json, name=issuedAt" })
  issuedAt?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
