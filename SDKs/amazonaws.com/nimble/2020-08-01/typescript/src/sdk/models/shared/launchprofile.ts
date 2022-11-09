import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfileStateEnum } from "./launchprofilestateenum";
import { LaunchProfileStatusCodeEnum } from "./launchprofilestatuscodeenum";
import { StreamConfiguration } from "./streamconfiguration";


export class LaunchProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2SubnetIds" })
  ec2SubnetIds?: string[];

  @Metadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @Metadata({ data: "json, name=launchProfileProtocolVersions" })
  launchProfileProtocolVersions?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: LaunchProfileStateEnum;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: LaunchProfileStatusCodeEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=streamConfiguration" })
  streamConfiguration?: StreamConfiguration;

  @Metadata({ data: "json, name=studioComponentIds" })
  studioComponentIds?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
