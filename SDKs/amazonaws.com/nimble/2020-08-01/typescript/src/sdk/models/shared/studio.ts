import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioStateEnum } from "./studiostateenum";
import { StudioStatusCodeEnum } from "./studiostatuscodeenum";
import { StudioEncryptionConfiguration } from "./studioencryptionconfiguration";


export class Studio extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminRoleArn" })
  adminRoleArn?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=homeRegion" })
  homeRegion?: string;

  @Metadata({ data: "json, name=ssoClientId" })
  ssoClientId?: string;

  @Metadata({ data: "json, name=state" })
  state?: StudioStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: StudioStatusCodeEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=studioEncryptionConfiguration" })
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  @Metadata({ data: "json, name=studioId" })
  studioId?: string;

  @Metadata({ data: "json, name=studioName" })
  studioName?: string;

  @Metadata({ data: "json, name=studioUrl" })
  studioUrl?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=userRoleArn" })
  userRoleArn?: string;
}
