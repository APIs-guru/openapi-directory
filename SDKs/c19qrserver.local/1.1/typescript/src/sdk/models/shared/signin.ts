import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Signin
/** 
 * Payload of signin object
**/
export class Signin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dt" })
  dt?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone: string;
}
