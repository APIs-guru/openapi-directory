import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";



export class CreateDbSecurityGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroup?: DbSecurityGroup;
}
