import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Membership
/** 
 * Membership
**/
export class Membership extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=confirm" })
  confirm: boolean;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=invited" })
  invited: number;

  @Metadata({ data: "json, name=joined" })
  joined: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roles" })
  roles: string[];

  @Metadata({ data: "json, name=teamId" })
  teamId: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}
