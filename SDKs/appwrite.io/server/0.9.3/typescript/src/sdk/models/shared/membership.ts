import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Membership
/** 
 * Membership
**/
export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=confirm" })
  confirm: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=invited" })
  invited: number;

  @SpeakeasyMetadata({ data: "json, name=joined" })
  joined: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: string[];

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
