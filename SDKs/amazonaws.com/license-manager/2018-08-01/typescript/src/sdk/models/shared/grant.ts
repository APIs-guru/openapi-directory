import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrantStatusEnum } from "./grantstatusenum";
import { AllowedOperationEnum } from "./allowedoperationenum";


// Grant
/** 
 * Describes a grant.
**/
export class Grant extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @Metadata({ data: "json, name=GrantName" })
  grantName: string;

  @Metadata({ data: "json, name=GrantStatus" })
  grantStatus: GrantStatusEnum;

  @Metadata({ data: "json, name=GrantedOperations" })
  grantedOperations: AllowedOperationEnum[];

  @Metadata({ data: "json, name=GranteePrincipalArn" })
  granteePrincipalArn: string;

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=ParentArn" })
  parentArn: string;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=Version" })
  version: string;
}
