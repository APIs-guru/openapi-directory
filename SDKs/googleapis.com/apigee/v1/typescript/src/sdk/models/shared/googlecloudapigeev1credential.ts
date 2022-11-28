import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ApiProductRef } from "./googlecloudapigeev1apiproductref";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";



export class GoogleCloudApigeeV1Credential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiProducts", elemType: GoogleCloudApigeeV1ApiProductRef })
  apiProducts?: GoogleCloudApigeeV1ApiProductRef[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=consumerKey" })
  consumerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerSecret" })
  consumerSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=issuedAt" })
  issuedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
