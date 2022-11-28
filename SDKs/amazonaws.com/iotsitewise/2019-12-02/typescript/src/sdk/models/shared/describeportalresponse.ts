import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarms } from "./alarms";
import { AuthModeEnum } from "./authmodeenum";
import { ImageLocation } from "./imagelocation";
import { PortalStatus } from "./portalstatus";



export class DescribePortalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarms" })
  alarms?: Alarms;

  @SpeakeasyMetadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=portalArn" })
  portalArn: string;

  @SpeakeasyMetadata({ data: "json, name=portalAuthMode" })
  portalAuthMode?: AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=portalClientId" })
  portalClientId: string;

  @SpeakeasyMetadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @SpeakeasyMetadata({ data: "json, name=portalCreationDate" })
  portalCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=portalId" })
  portalId: string;

  @SpeakeasyMetadata({ data: "json, name=portalLastUpdateDate" })
  portalLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=portalLogoImageLocation" })
  portalLogoImageLocation?: ImageLocation;

  @SpeakeasyMetadata({ data: "json, name=portalName" })
  portalName: string;

  @SpeakeasyMetadata({ data: "json, name=portalStartUrl" })
  portalStartUrl: string;

  @SpeakeasyMetadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
