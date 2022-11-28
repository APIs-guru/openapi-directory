import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";



export class DbSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroup })
  dbSecurityGroups?: DbSecurityGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
