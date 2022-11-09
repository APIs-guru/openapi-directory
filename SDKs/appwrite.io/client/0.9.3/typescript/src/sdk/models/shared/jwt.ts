import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Jwt
/** 
 * JWT
**/
export class Jwt extends SpeakeasyBase {
  @Metadata({ data: "json, name=jwt" })
  jwt: string;
}
