import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileStateEnum } from "./launchprofilestateenum";
import { LaunchProfileStatusCodeEnum } from "./launchprofilestatuscodeenum";
import { StreamConfiguration } from "./streamconfiguration";



export class LaunchProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2SubnetIds" })
  ec2SubnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersions" })
  launchProfileProtocolVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LaunchProfileStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: LaunchProfileStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=streamConfiguration" })
  streamConfiguration?: StreamConfiguration;

  @SpeakeasyMetadata({ data: "json, name=studioComponentIds" })
  studioComponentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
