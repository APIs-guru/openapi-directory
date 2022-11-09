import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Signin
/** 
 * Payload of signin object
**/
export class Signin extends SpeakeasyBase {
  @Metadata({ data: "json, name=dt" })
  dt?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=phone" })
  phone: string;
}
