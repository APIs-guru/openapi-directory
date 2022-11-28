import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";
import { AllowedOperationEnum } from "./allowedoperationenum";



// Grant
/** 
 * Describes a grant.
**/
export class Grant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @SpeakeasyMetadata({ data: "json, name=GrantName" })
  grantName: string;

  @SpeakeasyMetadata({ data: "json, name=GrantStatus" })
  grantStatus: GrantStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=GrantedOperations" })
  grantedOperations: AllowedOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=GranteePrincipalArn" })
  granteePrincipalArn: string;

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=ParentArn" })
  parentArn: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: string;
}
