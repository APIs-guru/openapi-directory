import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";



export class AuthorizeDbSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroup?: DbSecurityGroup;
}
