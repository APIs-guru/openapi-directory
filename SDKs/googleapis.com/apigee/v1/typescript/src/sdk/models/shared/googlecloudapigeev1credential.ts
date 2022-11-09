import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ApiProductRef } from "./googlecloudapigeev1apiproductref";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";


export class GoogleCloudApigeeV1Credential extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiProducts", elemType: shared.GoogleCloudApigeeV1ApiProductRef })
  apiProducts?: GoogleCloudApigeeV1ApiProductRef[];

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=consumerKey" })
  consumerKey?: string;

  @Metadata({ data: "json, name=consumerSecret" })
  consumerSecret?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @Metadata({ data: "json, name=issuedAt" })
  issuedAt?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
