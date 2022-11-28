import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioStateEnum } from "./studiostateenum";
import { StudioStatusCodeEnum } from "./studiostatuscodeenum";
import { StudioEncryptionConfiguration } from "./studioencryptionconfiguration";



export class Studio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminRoleArn" })
  adminRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=homeRegion" })
  homeRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=ssoClientId" })
  ssoClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StudioStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: StudioStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=studioEncryptionConfiguration" })
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=studioId" })
  studioId?: string;

  @SpeakeasyMetadata({ data: "json, name=studioName" })
  studioName?: string;

  @SpeakeasyMetadata({ data: "json, name=studioUrl" })
  studioUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=userRoleArn" })
  userRoleArn?: string;
}
