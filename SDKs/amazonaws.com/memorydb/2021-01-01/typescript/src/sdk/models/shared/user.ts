import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Authentication } from "./authentication";


// User
/** 
 * You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLNames" })
  aclNames?: string[];

  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=AccessString" })
  accessString?: string;

  @Metadata({ data: "json, name=Authentication" })
  authentication?: Authentication;

  @Metadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
