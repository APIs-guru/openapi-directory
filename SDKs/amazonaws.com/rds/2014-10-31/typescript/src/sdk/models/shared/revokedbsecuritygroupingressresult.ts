import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";



export class RevokeDbSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroup?: DbSecurityGroup;
}
