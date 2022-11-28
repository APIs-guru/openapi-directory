import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";



export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroup })
  dbSubnetGroups?: DbSubnetGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
