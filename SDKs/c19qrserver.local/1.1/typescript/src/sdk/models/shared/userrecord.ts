import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserRecord
/** 
 * A team member user record
**/
export class UserRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;
}
