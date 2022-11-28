import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";



// User
/** 
 * You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLNames" })
  aclNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessString" })
  accessString?: string;

  @SpeakeasyMetadata({ data: "json, name=Authentication" })
  authentication?: Authentication;

  @SpeakeasyMetadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
