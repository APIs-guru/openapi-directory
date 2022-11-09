import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Alarms } from "./alarms";
import { AuthModeEnum } from "./authmodeenum";
import { ImageLocation } from "./imagelocation";
import { PortalStatus } from "./portalstatus";


export class DescribePortalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarms" })
  alarms?: Alarms;

  @Metadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @Metadata({ data: "json, name=portalArn" })
  portalArn: string;

  @Metadata({ data: "json, name=portalAuthMode" })
  portalAuthMode?: AuthModeEnum;

  @Metadata({ data: "json, name=portalClientId" })
  portalClientId: string;

  @Metadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @Metadata({ data: "json, name=portalCreationDate" })
  portalCreationDate: Date;

  @Metadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @Metadata({ data: "json, name=portalId" })
  portalId: string;

  @Metadata({ data: "json, name=portalLastUpdateDate" })
  portalLastUpdateDate: Date;

  @Metadata({ data: "json, name=portalLogoImageLocation" })
  portalLogoImageLocation?: ImageLocation;

  @Metadata({ data: "json, name=portalName" })
  portalName: string;

  @Metadata({ data: "json, name=portalStartUrl" })
  portalStartUrl: string;

  @Metadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
